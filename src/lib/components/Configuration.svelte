<script lang="ts">
  import { inputs } from "$lib/store/inputs.svelte.js";
</script>
<h2>Configuration</h2>

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
    {#each inputs.joysticks as vj, idx}
    <tr>
      <td>{vj.name}</td>
      <td>
        <input bind:value={inputs.joysticks[idx].gamepad} type="number" />
      </td>
      <td><input bind:value={inputs.joysticks[idx].axes_x} type="number" /></td>
      <td><input bind:value={inputs.joysticks[idx].axes_y} type="number" /></td>
      <td><input bind:value={inputs.joysticks[idx].key_x_pos} /></td>
      <td><input bind:value={inputs.joysticks[idx].key_x_neg} /></td>
      <td><input bind:value={inputs.joysticks[idx].key_y_pos} /></td>
      <td><input bind:value={inputs.joysticks[idx].key_y_neg} /></td>
      <td><input type="checkbox" bind:checked={inputs.joysticks[idx].invert_x} /></td>
      <td><input type="checkbox" bind:checked={inputs.joysticks[idx].invert_y} /></td>
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
    {#each inputs.buttons as vb}
    <tr>
      <td>{vb.name}</td>
      <td>
        <input bind:value={vb.gamepad} type="number" />
      </td>
      <td>
        {#each vb.gamepad_buttons as btn, btnIdx}
          <input bind:value={vb.gamepad_buttons[btnIdx]} type="number" /><br />
        {/each}
      </td><td>
        <button>+</button>
      </td>
      <td>
        {#each vb.keyboard_keys as key, keyIdx}
          <input 
            bind:value={vb.keyboard_keys[keyIdx]} 
            type="text" /><br />
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