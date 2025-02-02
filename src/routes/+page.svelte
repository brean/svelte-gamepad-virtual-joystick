<script lang="ts">
  import Configuration from "$lib/components/Configuration.svelte";
  import GamepadManager from "$lib/components/GamepadManager.svelte";
  import KeyboardManager from "$lib/components/KeyboardManager.svelte";
  import VirtualButton from "$lib/components/VirtualButton.svelte";
  import VirtualJoystick from "$lib/components/VirtualJoystick.svelte";
  import VirtualList from "$lib/components/VirtualList.svelte";
  import { gamepad } from "$lib/store/gamepad.js";

  
  let position_first: [x: number, y: number] = [0, 0];
  let position_second: [x: number, y: number] = [0, 0];
  let sideNavWidth = '0'
  let navopen: boolean = false

  function requestFullScreen() {
    (document.getElementById("main") as any).requestFullscreen()
  }

  function toggleNav() {
    sideNavWidth = sideNavWidth == '0' ? '250px' : '0';
    navopen = sideNavWidth !== '0';
  }
</script>

<div id="sidenav" class="sidenav" style:width={sideNavWidth}>
  <a href="javascript:void(0)" class="closebtn" onclick={toggleNav}>&times;</a>
  <VirtualList onpress={toggleNav}>
    <li>Main</li>
    <li>Settings</li>
  </VirtualList>
</div>

<main style:margin-left={sideNavWidth} style:min-width={'500px'}>
<VirtualButton
  style="backtround-color: blue"
  name="Nav Button"
  bind:pressed={navopen}
  onpress={toggleNav}
>
  Side Menu
</VirtualButton><br />

<!-- GamepadManager and KeyboardManager should be unique in your page. -->
<GamepadManager />
<KeyboardManager />

<VirtualJoystick
  name="first"
  style="background-color: black"
  size={120}
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
    name="second"
    color={"red"}
    bind:position={position_second}
  />
  <div style="max-width: 200px;">
    x: {position_second[0]}<br />
    y: {position_second[1]}
  </div>
</div>
<br /><br />
<VirtualButton
  style="background-color: yellow;"
>
  PRESS ME!
</VirtualButton>
<br /><br />
<hr />
<button onclick={requestFullScreen}>Fullscreen</button>
<!-- TODO: Dialog menu
<Configuration></Configuration>
-->
</main>
