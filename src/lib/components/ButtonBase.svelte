<script lang="ts">
  import { onkeypressed, onkeyrelease, onkeyhold } from '$lib/store/keyboard_callbacks.svelte.js'
  import { onbuttonpressed, onbuttonrelease, onbuttonhold } from '$lib/store/gamepad_callbacks.svelte.js';
  import type ButtonInput from "$lib/models/ButtonInput.js";
  import { onMount, type Snippet } from "svelte";
  import { inputs } from '$lib/store/inputs.svelte.js';
  import { thisGamepad } from '$lib/utils.js';

  interface Props {
    children: Snippet,
    disabled?: boolean
    onpressed?: (() => void),
    onhold?: (() => void),
    onrelease?: (() => void),
    pressed?: boolean,
    input_mapping?: ButtonInput
  }

  let {
    children,
    disabled = false,
    onpressed = undefined,  // only once when the pressed-state changes
    onhold = undefined,   // every event while the button is pressed
    onrelease = undefined,
    pressed = $bindable(false),
    input_mapping = {
      name: '',
      gamepad: -1,
      gamepad_buttons: [0],
      keyboard_keys: ['e', ' ']
    }
  }: Props = $props();

  const _onpressed = () => {
    if (disabled) {
      return;
    }
    pressed = true;
    if (onpressed) {
      onpressed();
    }
  }

  const _onhold = () => {
    if (!disabled && onhold) {
      onhold();
    }
  }

  const _onrelease = () => {
    pressed = false;
    if (onrelease) {
      onrelease();
    }
  }

  onMount(() => {
    inputs.buttons.push(input_mapping);
    // for some reason we can not use input_mapping directly, I guess it gets
    // copied when its pushed to inputs.buttons
    const _input = inputs.buttons[inputs.buttons.length - 1];

    function thisKey(event: KeyboardEvent): boolean {
      return _input.keyboard_keys.indexOf(event.key) > -1
    }

    function thisGamepadButton(gamepad: Gamepad, button: number): boolean {
      if (!thisGamepad(_input, gamepad)) {
          return false
      }
      return _input.gamepad_buttons.indexOf(button) > -1;
    }

    const _custom_onpressed = (event: KeyboardEvent) => {
      if (thisKey(event)) {
        _onpressed();
      }
    }
    const _custom_onrelease = (event: KeyboardEvent) => {
      if (thisKey(event)) {
        _onrelease();
      }
    }
    const _custom_onhold = (event: KeyboardEvent) => {
      if (thisKey(event)) {
        _onhold();
      }
    }

    const _custom_buttonpressed = (pad: Gamepad, button: number) => {
      if (thisGamepadButton(pad, button)) {
        _onpressed();
      }
    }

    const _custom_buttonrelease = (pad: Gamepad, button: number) => {
      if (thisGamepadButton(pad, button)) {
        _onrelease();
      }
    }

    const _custom_buttonhold = (pad: Gamepad, button: number) => {
      if (thisGamepadButton(pad, button)) {
        _onhold();
      }
    }
    // keyboard
    onkeypressed.push(_custom_onpressed);
    onkeyrelease.push(_custom_onrelease);
    onkeyhold.push(_custom_onhold);
    // gamepad
    onbuttonpressed.push(_custom_buttonpressed);
    onbuttonrelease.push(_custom_buttonrelease);
    onbuttonhold.push(_custom_buttonhold);
    return () => {
      // cleanup on destroy
      // keyboard
      onkeypressed.splice(onkeypressed.indexOf(_custom_onpressed), 1);
      onkeyrelease.splice(onkeyrelease.indexOf(_custom_onrelease), 1);
      onkeyhold.splice(onkeyhold.indexOf(_custom_onhold), 1);
      // gamepad
      onbuttonpressed.splice(onbuttonpressed.indexOf(_custom_buttonpressed), 1);
      onbuttonrelease.splice(onbuttonrelease.indexOf(_custom_buttonrelease), 1);
      onbuttonhold.splice(onbuttonhold.indexOf(_custom_buttonhold), 1);
      // unregister configuration
      inputs.buttons.splice(inputs.buttons.indexOf(_input), 1);
    }
  });
</script>

{@render children?.()}