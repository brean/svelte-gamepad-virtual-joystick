<script lang="ts">
  import { virtual_button_inputs } from "$lib/store/virtual_button_inputs.js";
  import { virtual_joystick_inputs } from "$lib/store/virtual_joystick_inputs.js";
</script>
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

<style>
  input {
    max-width: 80px;
  }
</style>