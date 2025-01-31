<script lang="ts">
  import GamepadManager from "$lib/components/GamepadManager.svelte";
  import KeyboardManager from "$lib/components/KeyboardManager.svelte";
  import VirtualButton from "$lib/components/VirtualButton.svelte";
  import VirtualJoystick from "$lib/components/VirtualJoystick.svelte";
  import VirtualList from "$lib/components/VirtualList.svelte";
  import { gamepad } from "$lib/store/gamepad.js";
  import { virtual_button_inputs } from "$lib/store/virtual_button_inputs.js";
  import { virtual_joystick_inputs } from "$lib/store/virtual_joystick_inputs.js";
  
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
  <VirtualList>
    <li>Something</li>
    <li>Settings</li>
    <li>Something else</li>
  </VirtualList>
</div>

<!-- TODO: press event -->
<VirtualButton
  style="backtround-color: blue"
  name="Nav Button"
  bind:pressed={navopen}
  onpress={toggleNav}
>
  Side Menu
</VirtualButton><br />

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


<!-- GamepadManager and KeyboardManager should be unique in your page. -->
<GamepadManager />
<KeyboardManager />

<VirtualJoystick
  name="first"
  style="background-color: black"
  size={120}
  bind:position={position_first}
/><br />
x: {position_first[0]} y: {position_first[1]}
<br />

<VirtualJoystick
  name="second"
  color={"red"}
  bind:position={position_second}
/><br />
x: {position_second[0]} y: {position_second[1]}

<br /><br />
<VirtualButton
  style="background-color: yellow"
>
  PRESS ME!
</VirtualButton>
<br /><br />
<hr />
<br />
Configuration
<br />
Key Mapping joystick inputs (gamepad -1=all, -2&lt;=disabled)
<br />
<table>
  <tbody>
    <tr>
      <td>Name</td>
      <td>Gamepad</td>
      <td>Pad X</td>
      <td>Pad Y</td>
      <td>Key X Pos</td>
      <td>Key X Neg</td>
      <td>Key Y Pos</td>
      <td>Key Y Neg</td>
      <td>Invert X</td>
      <td>Invert Y</td>
    </tr>
    {#each $virtual_joystick_inputs as vs}
    <tr>
      <td>{vs.name}</td>
      <td>
        <input bind:value={vs.gamepad} type="number" />
      </td>
      <td><input bind:value={vs.axes_x} type="number" /></td>
      <td><input bind:value={vs.axes_y} type="number" /></td>
      <td><input bind:value={vs.key_x_pos} /></td>
      <td><input bind:value={vs.key_x_neg} /></td>
      <td><input bind:value={vs.key_y_pos} /></td>
      <td><input bind:value={vs.key_y_neg} /></td>
      <td><input type="checkbox" bind:checked={vs.invert_x} /></td>
      <td><input type="checkbox" bind:checked={vs.invert_y} /></td>
    </tr>
    {/each}
  </tbody>
</table>
<br />
Buttons:<br />
<table>
  <tbody>
    <tr>
      <td>name</td>
      <td>gamepad</td>
      <td>Pad button</td>
      <td></td>
      <td>key</td>
      <td></td>
    </tr>
    {#each $virtual_button_inputs as vb}
    <tr>
      <td>{vb.name}</td>
      <td>
        <input bind:value={vb.gamepad} type="number" />
      </td>
      <td>
        {#each vb.gamepad_buttons as btn}
          <input bind:value={btn} type="number" /><br />
        {/each}
      </td><td>
        <button>+</button>
      </td>
      <td>
        {#each vb.keyboard_keys as key}
          <input bind:value={key} type="text" /><br />
        {/each}
      </td><td>
        <button>+</button>
      </td>
    </tr>
    {/each}
  </tbody>
</table>
<br /><br />
<button onclick={requestFullScreen}>Fullscreen</button>

<style>

  input {
    max-width: 80px;
  }

</style>