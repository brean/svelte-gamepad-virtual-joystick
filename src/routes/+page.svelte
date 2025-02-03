<script lang="ts">
  import Configuration from "$lib/components/Configuration.svelte";
  import GamepadManager from "$lib/components/GamepadManager.svelte";
  import KeyboardManager from "$lib/components/KeyboardManager.svelte";
  import VirtualButton from "$lib/components/VirtualButton.svelte";
  import VirtualJoystick from "$lib/components/VirtualJoystick.svelte";
  import VirtualList from "$lib/components/VirtualList.svelte";
  import { gamepad } from "$lib/store/gamepad.js";
  
  let position_first: [x: number, y: number] = $state([0, 0]);
  let position_second: [x: number, y: number] = $state([0, 0]);
  let sideNavWidth = $state<string>('0');
  let navOpen = $state<boolean>(false);
  let navEnable = $state<boolean>(false);
  let showConfig = $state<boolean>(false);
  const listItems = [
    'Main',
    'Second',
    'Third',
    'Settings',
    'Fifth',
  ]

  function requestFullScreen() {
    (document.getElementById("main") as any).requestFullscreen()
  }

  function toggleNav() {
    if (navOpen) {
      hideNav();
    } else {
      showNav();
    }
  }

  function hideNav() {
    sideNavWidth = '0';
    navOpen = false;
    navEnable = true;
  }

  function showNav() {
    sideNavWidth = '250px';
    navOpen = true;
    navEnable = false;
  }

  function listItemPressed(item: string) {
    if (item === 'Settings') {
      showConfig = true;
    }
    hideNav();
  }
</script>

<div id="sidenav" class="sidenav" style:width={sideNavWidth}>
  <button class="closebtn" onclick={toggleNav}>&times;</button>
  <VirtualList
    oncancel={hideNav}
    onpress={listItemPressed}
    items={listItems}
    wrap={false}
    disabled={navEnable}>
  </VirtualList>
</div>

<main style:margin-left={sideNavWidth} style:min-width={'500px'}>
<VirtualButton
  disabled={navOpen}
  onrelease={showNav}
  input_mapping={{
    name: 'Side Nav',
    gamepad: -1,
    gamepad_buttons: [9],  // 9 = options-key on PS4-dualshock controller
    keyboard_keys: ['q']
  }}
>
  Side Menu
</VirtualButton><br />

<!-- GamepadManager and KeyboardManager should be unique in your page. -->
<GamepadManager />
<KeyboardManager />

<VirtualJoystick
  style="background-color: black"
  size={120}
  disabled={navOpen}
  bind:position={position_first}
/>
x: {position_first[0]}<br />
y: {position_first[1]}
<br />

<div style:border={'2px solid red'}>
Connected gamepads: {$gamepad.length}
<table>
  <tbody>
    {#each $gamepad as gp}
      <tr>
        <td>Name</td>
        <td>Buttons</td>
        <td>Axes</td>
      </tr>
      <tr>
        <td>{gp.id}</td>
        <td>{gp.buttons.length}</td>
        <td>{gp.axes.length}</td>
      </tr>
    {/each}
  </tbody>
</table>
</div>

<div style="position: absolute; top: 30px; right: 30px;">
  <VirtualJoystick
    color={"red"}
    disabled={navOpen}
    bind:position={position_second}
    input_mapping={{
      name: 'second Virtual Joystick',
      gamepad: -1,
      axes_x: 2,
      axes_y: 3,
      key_x_pos: 'l',
      key_x_neg: 'j',
      key_y_pos: 'k',
      key_y_neg: 'i',
      deadzoneX: 0.05,
      deadzoneY: 0.05,
      invert_x: false,
      invert_y: false
    }}
  />
  <div style="max-width: 200px;">
    x: {position_second[0]}<br />
    y: {position_second[1]}
  </div>
</div>
<br /><br />
<VirtualButton
  style="background-color: yellow;"
  disabled={navOpen}
  input_mapping={{
    name: 'yellow button',
    gamepad: -1,
    gamepad_buttons: [1],
    keyboard_keys: ['r']
  }}
>
  PRESS CIRCLE OR "R"!
</VirtualButton>
<br /><br />
<hr />
<button onclick={requestFullScreen}>Fullscreen</button>

<Configuration bind:display={showConfig}></Configuration>

</main>
