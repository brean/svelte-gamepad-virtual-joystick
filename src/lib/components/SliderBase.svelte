<script lang="ts">
  import type SliderInput from "$lib/models/SliderInput.js";
  import { inputs } from "$lib/state/inputs.svelte.js";
  import { onMount } from "svelte";
  import { onkeypressed, onkeyrelease } from '$lib/state/keyboard_callbacks.svelte.js'
  import { onbuttonpressed, onbuttonrelease, onupdate } from '$lib/state/gamepad_callbacks.svelte.js';
  import { thisGamepad } from "$lib/utils.js";

  interface Props {
    value: number
    min: number
    max: number
    disabled: boolean
    input_mapping?: SliderInput
    focussed?: boolean
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
    focussed = $bindable<boolean>(false)
  }: Props = $props();

  inputs.sliders.push(input_mapping);
  const _input: SliderInput = inputs.sliders[inputs.lists.length - 1];
  onMount(() => {
    
  });
</script>