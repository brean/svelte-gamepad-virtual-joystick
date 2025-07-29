<script lang="ts">
  import GamepadButtons from "$lib/constants/GamepadButtons.js";
  import type SliderInput from "$lib/models/SliderInput.js";
  import InputComponent from "$lib/input_handling/InputComponent.js";
  import { registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";
  import { onMount } from "svelte";

  interface Props {
    value: number
    min: number
    max: number
    disabled: boolean
    inputMapping?: SliderInput
    focussed?: boolean
    context?: string[]
  }

  let {
    value = $bindable(50),
    min = 0,
    max = 100,
    disabled = false,
    inputMapping = {
      name: 'Slider',
      gamepad: -1,
      sensitivity: 0.05,
      axes: 0,
      buttons_neg: [GamepadButtons.L1, GamepadButtons.DPAD_LEFT],
      buttons_pos: [GamepadButtons.R1, GamepadButtons.DPAD_RIGHT],
      keys_pos: ['ArrowRight'],
      keys_neg: ['ArrowLeft'],
      invert: false
    },
    focussed = $bindable<boolean>(false),
    context = ['default']
  }: Props = $props();

  class SliderInputComponent extends InputComponent {
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