<script lang="ts">
  import { onkeypress, onkeyrelease, onkeyhold } from '$lib/store/keyboard_callbacks.svelte.js'
  import type VirtualButtonInput from "$lib/models/VirtualButtonInput.js";
  import { gamepad_listener } from "$lib/store/gamepad_listener.js";
  import { keyboard_listener } from "$lib/store/keyboard_listener.js";
  import { virtual_button_inputs } from "$lib/store/virtual_button_inputs.js";
  import { onMount, type Snippet } from "svelte";

  interface Props {
    children: Snippet,
    disabled?: boolean
    name?: string,
    onpress?: (() => void),
    onhold?: (() => void),
    onrelease?: (() => void),
    pressed?: boolean,
    style?: string,
    cssclass?: string,
    input_mapping?: VirtualButtonInput
  }

  let {
    children,
    disabled = false,
    onpress = undefined,  // only once when the pressed-state changes
    onhold = undefined,   // every event while the button is pressed
    onrelease = undefined,
    pressed = false,
    style = '',
    cssclass = 'vbutton',
    input_mapping = {
      name: '',
      gamepad: -1,
      gamepad_buttons: [0],
      keyboard_keys: ['e', ' ']
    }
  }: Props = $props();
  let gamepadActive = true;
  // track if gamepad-button is down to prevent calling onpress multiple times
  let gamepadDown: boolean = false

  $virtual_button_inputs.push(input_mapping);

  function gamepad_update(gamepad: Gamepad) {
    if (disabled || !gamepadActive || input_mapping.gamepad !== -1 && gamepad.index !== input_mapping.gamepad) {
      return;
    }
    for (const btnIdx of input_mapping.gamepad_buttons) {
      if (btnIdx > gamepad.buttons.length) {
        continue;
      }
      const btn = gamepad.buttons[btnIdx];
      pressed = btn.pressed;
      if (gamepadDown && pressed && onrelease) {
        onrelease();
      }
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

  const _onpress = () => {
    if (disabled) {
      return;
    }
    pressed = true;
    gamepadActive = false;
    if (onpress) {
      onpress();
    }
  }

  const _onhold = () => {
    if (!disabled && onhold) {
      onhold();
    }
  }

  const _onrelease = () => {
    if (disabled) {
      return;
    }
    pressed = false;
    gamepadActive = true;
    if (onrelease) {
      onrelease();
    }
  }

  onMount(() => {
    onkeypress.push((event: KeyboardEvent) => {
      if (input_mapping.keyboard_keys.indexOf(event.key) > -1) {
        _onpress();
      }
    });
    onkeyrelease.push((event: KeyboardEvent) => {
      if (input_mapping.keyboard_keys.indexOf(event.key) > -1) {
        _onrelease();
      }
    });
    onkeyhold.push((event: KeyboardEvent) => {
      if (input_mapping.keyboard_keys.indexOf(event.key) > -1) {
        _onhold();
      }
    });
    $gamepad_listener = [...$gamepad_listener, gamepad_update];
  });
</script>

<button
    {style}
    class={(pressed ? 'button_clicked ' : '') + cssclass}
    onpointerdown={_onpress}
    onpointerup={_onrelease}>
  {@render children()}
</button>
