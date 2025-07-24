<script lang="ts">
  import type ListInput from "$lib/models/ListInput.js";
  import { inputs } from "$lib/state/inputs.svelte.js";
  import { onMount } from "svelte";
  import { onkeypressed, onkeyrelease } from '$lib/state/keyboard_callbacks.svelte.js'
  import { onbuttonpressed, onbuttonrelease, onupdate } from '$lib/state/gamepad_callbacks.svelte.js';
  import { thisGamepad } from "$lib/utils.js";

  interface Props {
    changeFocus: (direction: 1 | -1) => void
    onpressed?: () => void
    disabled?: boolean
    input_mapping?: ListInput
  }

  let {
    changeFocus,
    onpressed,
    disabled = false,
    input_mapping = {
      name: 'List',
      gamepad: -1,
      gamepad_axes: [1],
      gamepad_axes_sens: 0.05, // sensitivity - at what value do we react to the axes movement?
      gamepad_buttons: [0],
      gamepad_prev_buttons: [12],  // up
      gamepad_next_buttons: [13],  // down
      keyboard_prev_keys: ['ArrowUp', 'w'],
      keyboard_next_keys: ['ArrowDown', 's'],
      keyboard_keys: ['e']
    }
  }: Props = $props();

  inputs.lists.push(input_mapping);
  const _input = inputs.lists[inputs.lists.length - 1];
  let axesDown = -1;
  
  onMount(() => {
    const _custom_onpressed = (event: KeyboardEvent) => {
      if (disabled) {
        return
      }
      if (input_mapping.keyboard_keys.indexOf(event.key) > -1) {
        if (onpressed) {
          onpressed();
        }
        return;
      }
      if (input_mapping.keyboard_next_keys.indexOf(event.key) > -1) {
        changeFocus(1);
        return;
      }
      if (input_mapping.keyboard_prev_keys.indexOf(event.key) > -1) {
        changeFocus(-1);
      }
    }

    const _custom_buttonpressed = (gamepad: Gamepad, button: number) => {
      if (disabled || !thisGamepad(_input, gamepad)) {
        return
      }
      if (input_mapping.gamepad_buttons.indexOf(button) > -1) {
        if (onpressed) {
          onpressed();
        }
        return;
      }
      if (input_mapping.gamepad_next_buttons.indexOf(button) > -1) {
        changeFocus(1);
        return;
      }
      if (input_mapping.gamepad_prev_buttons.indexOf(button) > -1) {
        changeFocus(-1);
        return;
      }
    }

    const _custom_gamepadupdate = (gamepad: Gamepad) => {
      // control by axes
      if (disabled || !thisGamepad(_input, gamepad)) {
        return
      }
      for (const axesIdx of input_mapping.gamepad_axes) {
        const value = gamepad.axes[axesIdx];
        let sensitivity = input_mapping.gamepad_axes_sens;
        if (value < -sensitivity && axesDown != axesIdx) {
          changeFocus(-1);
          axesDown = axesIdx;
          continue;
        }
        if (value > sensitivity && axesDown != axesIdx) {
          changeFocus(1);
          axesDown = axesIdx;
          continue;
        }
        if (value < sensitivity && value > -sensitivity) {
          axesDown = -1;
        }
      }
    }

    // keyboard
    onkeypressed.push(_custom_onpressed);
    // gamepad
    onbuttonpressed.push(_custom_buttonpressed);
    onupdate.push(_custom_gamepadupdate);
    return () => {
      // cleanup on destroy
      // keyboard
      onkeypressed.splice(onkeypressed.indexOf(_custom_onpressed), 1);
      // gamepad
      onbuttonpressed.splice(onbuttonpressed.indexOf(_custom_buttonpressed), 1);
      onupdate.splice(onupdate.indexOf(_custom_gamepadupdate), 1);
      // unregister configuration
      inputs.lists.splice(inputs.lists.indexOf(_input), 1);
    }
  });
</script>
