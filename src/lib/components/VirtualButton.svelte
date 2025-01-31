<script lang="ts">
  import type VirtualButtonInput from "$lib/models/VirtualButtonInput.js";
  import { gamepad_listener } from "$lib/store/gamepad_listener.js";
  import { keyboard_listener } from "$lib/store/keyboard_listener.js";
  import { virtual_button_inputs } from "$lib/store/virtual_button_inputs.js";
  import { onMount, type Snippet } from "svelte";

  let {
    children,
    name = 'Virtual Button',
    color = 'light-gray',
    onpress = undefined,  // only once when the pressed-state changes
    onhold = undefined,   // every event while the button is pressed
    pressed = $bindable<boolean>(false)
  }: {
    children: Snippet,
    name: string,
    color: string,
    onpress: (() => {}) | undefined,
    onhold: (() => {}) | undefined,
    pressed: boolean
  } = $props();
  let gamepadActive = true;
  // track if gamepad-button is down to prevent calling onpress multiple times
  let gamepadDown: boolean = false

  let input_mapping:VirtualButtonInput = {
    name,
    gamepad: -1,
    gamepad_buttons: [0],
    keyboard_keys: ['e', ' '],
  }
  $virtual_button_inputs.push(input_mapping);

  function key_update(event: KeyboardEvent) {
    if (input_mapping.keyboard_keys.indexOf(event.key) > -1) {
      pressed = event.type === 'keydown';
      gamepadActive = event.type === 'keyup';
      if (pressed) {
        if (onhold) {
          onhold();
        }
        if (onpress && !event.repeat) {
          onpress();
        }
      }
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
      if (!pressed) {
        gamepadDown = false;
      }
      if (pressed) {
        if (onhold) {
          onhold();
        }
        if (onpress && !gamepadDown) {
          onpress();
        }
        gamepadDown = true        
      }
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
    onpointerdown={() => {
      pressed = true;
      gamepadActive = false;
      if (onpress) {
        onpress();
      }
    }}
    onpointerup={() => {
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