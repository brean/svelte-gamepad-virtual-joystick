<script lang="ts">
  import type SliderInput from "$lib/models/SliderInput.js";
  import InputComponent from "$lib/input_handling/InputComponent.js";
  import { registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";
  import { onMount } from "svelte";

  interface Props {
    value: number
    min: number
    max: number
    disabled: boolean
    input_mapping?: SliderInput
    focussed?: boolean
    context?: string[]
  }

  let {
    value = $bindable(50),
    min = 0,
    max = 100,
    disabled = false,
    input_mapping = {
      name: 'Slider',
      gamepad: -1,
      sensitivity: 0.05,
      axes: 0,
      buttons_neg: [4],
      buttons_pos: [5],
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
    const slider = new SliderInputComponent(input_mapping);
    registerComponent(context, slider);
    return () => {
      // cleanup on destroy
      // unregister configuration
      unregisterComponent(context, slider);
    }
  });
</script>