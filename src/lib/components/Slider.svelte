<script lang="ts">
    import type SliderInput from "$lib/models/SliderInput.js";
    import SliderBase from "./SliderBase.svelte";

  interface Props {
    value?: number
    min?: number
    max?: number
    disabled?: boolean
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

</script>

<SliderBase 
  {disabled}
  {input_mapping}
  {min}
  {max}
  bind:value
  ></SliderBase>
<input type="range" {min} {max} bind:value {disabled}>