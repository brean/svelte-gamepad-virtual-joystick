<script lang="ts">
  import Configuration from "$lib/components/Configuration.svelte";
  import GamepadManager from "$lib/components/GamepadManager.svelte";
  import KeyboardManager from "$lib/components/KeyboardManager.svelte";
  import VirtualButton from "$lib/components/VirtualButton.svelte";
  import VirtualJoystick from "$lib/components/VirtualJoystick.svelte";
  import VirtualList from "$lib/components/VirtualList.svelte";
  
  let position_first: [x: number, y: number] = $state([0, 0]);
  let position_second: [x: number, y: number] = $state([0, 0]);
  let sideNavWidth = $state<string>('0');
  let navOpen = $state<boolean>(false);
  let navClosed = $state<boolean>(true);
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
    navClosed = true;
  }

  function showNav() {
    sideNavWidth = '250px';
    navOpen = true;
    navClosed = false;
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
    disabled={navClosed}
    oncancel={() => {
      hideNav()
      // return true to stop button from showing nav menu again
      return true;
    }}
    onpressed={listItemPressed}
    items={listItems}
    wrap={false}>
  </VirtualList>
</div>

<main style:margin-left={sideNavWidth} style:min-width={'500px'}>
<VirtualButton
  onpressed={() => {
    showNav();
    // return true to stop button from hiding nav menu again
    return true;
  }}
  disabled={navOpen}
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

<!-- rgb(6, 23, 28); /* DARK */ -->
<VirtualJoystick
  style="background-color: rgb(6, 23, 28);"
  size={120}
  disabled={navOpen}
  bind:position={position_first}
/>
x: {position_first[0]}<br />
y: {position_first[1]}
<br />

<div style="position: absolute; top: 30px; right: 30px;">
  <VirtualJoystick
    color={"rgb(236, 97, 159)" /* OSAKA_RED */}
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
<!-- rgb(29, 58, 143); /* GUAM_BLUE */ -->
<VirtualButton
  style="background-color: rgb(29, 58, 143); color: white;"
  disabled={navOpen}
  input_mapping={{
    name: 'blue button',
    gamepad: -1,
    gamepad_buttons: [1],
    keyboard_keys: ['r']
  }}
>
  PRESS CIRCLE OR "R"!
</VirtualButton>

<!-- rgb(247, 167, 018); /* ERFOUD_ORANGE */ -->
<VirtualButton
  style="background-color: rgb(247, 167, 018);"
  disabled={navOpen}
  input_mapping={{
    name: 'orange button',
    gamepad: -1,
    gamepad_buttons: [3],
    keyboard_keys: ['x']
  }}
>
  PRESS TRIANGLE OR "X"!
</VirtualButton>
<br /><br />
<hr />
<button onclick={requestFullScreen}>Fullscreen</button>
<div id="nav_modal" class="modal" style:display={showConfig ? 'block' : 'none'}>
  <div class="modal-content">
    <button onclick={() => {
      showConfig=false}}>close</button>
    <br />
    <Configuration></Configuration>
  </div>
</div>

</main>
