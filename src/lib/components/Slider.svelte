<script lang="ts">
    import GamepadButtons from "$lib/constants/GamepadButtons.js";
    import type SliderInput from "$lib/models/SliderInput.js";
    import SliderBase from "./SliderBase.svelte";

  interface Props {
    value?: number
    min?: number
    max?: number
    disabled?: boolean
    inputMapping?: SliderInput
    focussed?: boolean
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
    focussed = $bindable<boolean>(false)
  }: Props = $props();

</script>

<SliderBase 
  {disabled}
  {inputMapping}
  {min}
  {max}
  bind:value
  ></SliderBase>
<input type="range" {min} {max} bind:value {disabled}>