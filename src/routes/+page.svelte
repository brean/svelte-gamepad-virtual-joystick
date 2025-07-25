<script lang="ts">
  import GamepadManager from "$lib/input_handling/GamepadManager.svelte";
  import KeyboardManager from "$lib/input_handling/KeyboardManager.svelte";
  import Button from "$lib/components/Button.svelte";
  import Joystick from "$lib/components/Joystick.svelte";

  let position_first: [x: number, y: number] = $state([0, 0]);
</script>

<main>
<Button
  input_mapping={{
    name: 'Side Nav',
    gamepad: -1,
    buttons: [1],
    keys: ['e']
  }}
>
  press me!
</Button>

<!-- GamepadManager and KeyboardManager should be unique in your page. -->
<GamepadManager />
<KeyboardManager />

<!-- rgb(6, 23, 28); /* DARK */ -->
<Joystick
  style="background-color: rgb(6, 23, 28);"
  size={120}
  bind:position={position_first}
/>
x: {position_first[0]}<br />
y: {position_first[1]}
<br />
</main>
