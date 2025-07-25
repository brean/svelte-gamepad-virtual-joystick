<script lang="ts">
  import GamepadManager from "$lib/input_handling/GamepadManager.svelte";
  import KeyboardManager from "$lib/input_handling/KeyboardManager.svelte";
  import Button from "$lib/components/Button.svelte";

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
</main>
