<script lang="ts">
  import type VirtualButtonInput from "$lib/models/VirtualButtonInput.js";
  import { gamepad_listener } from "$lib/store/gamepad_listener.js";
  import { keyboard_listener } from "$lib/store/keyboard_listener.js";
  import { virtual_button_inputs } from "$lib/store/virtual_button_inputs.js";
  import { onMount } from "svelte";
  let { children, color, pressed = false } = $props();
  let gamepadActive = true;

  let input_mapping:VirtualButtonInput = {
    gamepad: -1,
    gamepad_buttons: [0],
    keyboard_keys: ['e', ' '],
  }
  $virtual_button_inputs.push(input_mapping);

  function key_update(event: KeyboardEvent) {
    if (input_mapping.keyboard_keys.indexOf(event.key) > -1) {
      pressed = event.type === 'keydown';
      gamepadActive = event.type === 'keyup';
    }
  }

  function gamepad_update(gamepad: Gamepad) {
    if (!gamepadActive || input_mapping.gamepad !== -1 && gamepad.index !== input_mapping.gamepad) {
      return;
    }
    for (const btnIdx of input_mapping.gamepad_buttons) {
      if (btnIdx > gamepad.buttons.length) {
        continue;
      }
      const btn = gamepad.buttons[btnIdx]
      pressed = btn.pressed;
    }
    
  }

  onMount(() => {
    $gamepad_listener = [...$gamepad_listener, gamepad_update];
    $keyboard_listener = [...$keyboard_listener, key_update];
  });
</script>

<button
    style:background-color={color}
    class={pressed ? 'button_clicked' : ''}
    onmousedown={() => {
      pressed = true;
      gamepadActive = false;
    }}
    onmouseup={() => {
      pressed = false;
      gamepadActive = true;
    }}>
  {@render children()}
</button>

<style>
  button {
    border: 3px solid gray;
    border-radius: 100px;
    width: 100px;
    height: 100px;
  }

  .button_clicked {
    border: 6px solid red;
  }
</style>