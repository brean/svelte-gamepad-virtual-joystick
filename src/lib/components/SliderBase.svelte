<script lang="ts">
  import GamepadButtons from "$lib/constants/GamepadButtons.js";
  import type SliderInput from "$lib/models/SliderInput.js";
  import InputComponent from "$lib/input_handling/InputComponent.js";
  import { registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";
  import { onMount } from "svelte";
    import { thisGamepad } from "$lib/utils.js";

  interface Props {
    value: number
    min: number
    max: number
    step: number
    disabled: boolean
    inputMapping?: SliderInput
    focussed?: boolean
    context?: string[]
    onpressed?: () => boolean
  }

  let {
    value = $bindable(50),
    min = 0,
    max = 100,
    step = 1,
    onpressed,
    disabled = false,
    inputMapping = {
      name: 'Slider',
      gamepad: -1,
      sensitivity: 0.05,
      axes: 0,
      buttons: [GamepadButtons.DOWN], // activate/focus next component
      buttons_neg: [GamepadButtons.L1, GamepadButtons.DPAD_LEFT],
      buttons_pos: [GamepadButtons.R1, GamepadButtons.DPAD_RIGHT],
      keys_pos: ['arrowright'],
      keys_neg: ['arrowleft'],
      keys: ['e', 'enter'],  // activate/focus next component
      invert: false
    },
    focussed = $bindable<boolean>(false),
    context = ['default']
  }: Props = $props();

  class SliderInputComponent extends InputComponent {
    onpressed(): boolean {
      if (disabled) {
        return false;
      }
      return onpressed ? onpressed() : false;
    }

    // --- Gamepad ---
    onbuttonhold(gamepad: Gamepad, btn: number) {
      if (disabled || !thisGamepad(this.input, gamepad)) {
        return;
      }
      if (inputMapping.buttons_pos.includes(btn)) {
        value = Math.min(max, value+step);
      }
      if (inputMapping.buttons_neg.includes(btn)) {
        value = Math.max(min, value-step);
      }
    }

    // --- Keyboard ---
    onkeyhold(event?: KeyboardEvent): void {
      if (!event) {
        return;
      }
      const key = event.key.toLowerCase()
      if (inputMapping.keys.includes(key)) {
        return this.onhold();
      }
      if (inputMapping.keys_pos.includes(key)) {
        value = Math.min(max, value+step);
      }
      if (inputMapping.keys_neg.includes(key)) {
        value = Math.max(min, value-step);
      }
    }
  }

  onMount(() => {
    const slider = new SliderInputComponent(inputMapping);
    registerComponent(context, slider);
    return () => {
      // cleanup on destroy
      // unregister configuration
      unregisterComponent(context, slider);
    }
  });
</script>