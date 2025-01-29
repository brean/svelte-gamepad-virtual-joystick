<script lang="ts">
  import GamepadManager from "$lib/components/GamepadManager.svelte";
  import VirtualButton from "$lib/components/VirtualButton.svelte";
  import VirtualJoystick from "$lib/components/VirtualJoystick.svelte";
  import { gamepad } from "$lib/store/gamepad.js";
  import { virtual_joystick_inputs } from "$lib/store/virtual_joystick_inputs.js";
  
  let position_first: [x: number, y: number] = [0, 0];
  let position_second: [x: number, y: number] = [0, 0];

  function requestFullScreen() {
    document.getElementById("main").requestFullscreen()
  }
</script>
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


<!-- GamepadManager should be unique in your page. -->

<GamepadManager />

<VirtualJoystick
  background="black"
  size={120}
  bind:position={position_first}
/><br />
x: {position_first[0]} y: {position_first[1]}
<br />

<VirtualJoystick
  color={"red"}
  bind:position={position_second}
/><br />
x: {position_second[0]} y: {position_second[1]}

<br /><br />
<VirtualButton
  color={"yellow"}
  button={"a"}
  key={"q"}
>
  PRESS ME!
</VirtualButton>
<br /><br />
<hr />
<br />
Configuration
<br />
Key Mapping joystick inputs
<br />
<table>
  <tbody>
    <tr>
      <td>Joystick<br />
        (-1=all, -2&lt;=disabled)</td>
      <td>Gamepad X</td>
      <td>Gamepad Y</td>
      <td>Keyboard X</td>
      <td>Keyboard Y</td>
      <td>Invert X</td>
      <td>Invert Y</td>
    </tr>
    {#each $virtual_joystick_inputs as vs}
    <tr>
      <td>
        <input bind:value={vs.gamepad} type="number" />
        </td>
      <td><input bind:value={vs.axes_x} type="number" /></td>
      <td><input bind:value={vs.axes_y} type="number" /></td>
      <td><input bind:value={vs.key_x} /></td>
      <td><input bind:value={vs.key_y} /></td>
      <td><input type="checkbox" bind:checked={vs.invert_x} /></td>
      <td><input type="checkbox" bind:checked={vs.invert_y} /></td>
    </tr>
    {/each}
  </tbody>
</table>
<br />
TODO: Key Mapping button inputs
<br /><br />
<button on:click={requestFullScreen}>Fullscreen</button>