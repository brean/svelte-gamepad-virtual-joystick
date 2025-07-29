<script lang="ts">
  import type ListInput from "$lib/models/ListInput.js";
  import InputComponent from "$lib/input_handling/InputComponent.js";
  import { onMount } from "svelte";
  import { thisGamepad } from "$lib/utils.js";
  import { registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";
    import GamepadButtons from "$lib/constants/GamepadButtons.js";

  interface Props {
    changeFocus: (direction: 1 | -1) => void
    onpressed?: () => boolean
    disabled?: boolean
    inputMapping?: ListInput
    context?: string[]
  }

  let {
    changeFocus,
    onpressed,
    disabled = false,
    inputMapping = {
      name: 'List',
      gamepad: -1,
      axes: [1],
      sensitivity: 0.05, // sensitivity - at what value do we react to the axes movement?
      buttons: [GamepadButtons.DOWN],
      buttons_prev: [GamepadButtons.DPAD_UP],
      buttons_next: [GamepadButtons.DPAD_DOWN],
      keys_prev: ['arrowup', 'w'],
      keys_next: ['arrowdown', 's'],
      keys: ['e', 'enter']  // activate
    },
    context=['default']
  }: Props = $props();

  let axesDown = -1;
  class ListInputComponent extends InputComponent {
    onpressed(): boolean {
      if (disabled) {
        return false;
      }
      console.log('PRESSED!')
      return onpressed ? onpressed() : true;
    }

    // --- Gamepad ---
    onbuttonpressed(gamepad: Gamepad, btn: number): boolean {
      if (disabled || !thisGamepad(this.input, gamepad)) {
        return false;
      }
      if (inputMapping.buttons.includes(btn)) {
        return this.onpressed();
      }
      if (inputMapping.buttons_next.includes(btn)) {
        changeFocus(1);
        return true;
      }
      if (inputMapping.buttons_prev.includes(btn)) {
        changeFocus(-1);
        return true;
      }
      return false;
    }

    // --- Keyboard ---
    onkeypressed(event?: KeyboardEvent): boolean {
      if (!event) {
        return false;
      }
      const key = event.key.toLowerCase()
      if (inputMapping.keys.includes(key)) {
        return this.onpressed();
      }
      if (inputMapping.keys_next.includes(key)) {
        changeFocus(1);
        return true;
      }
      if (inputMapping.keys_prev.includes(key)) {
        changeFocus(-1);
        return true;
      }
      return false;
    }

    onupdate(gamepad: Gamepad): void {
      if (disabled || !thisGamepad(this.input, gamepad)) {
        return
      }
      for (const axesIdx of inputMapping.axes) {
        const value = gamepad.axes[axesIdx];
        let sensitivity = inputMapping.sensitivity;
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
  }
  
  onMount(() => {
    const comp = new ListInputComponent(inputMapping);
    registerComponent(context, comp);
    return () => {
      unregisterComponent(context, comp);
    }
  });
</script>
