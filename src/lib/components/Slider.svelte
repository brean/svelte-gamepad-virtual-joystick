<script lang="ts">
  import { onMount } from "svelte";

  import GamepadButtons from "$lib/constants/GamepadButtons.js";
  import Hint from "./Hint.svelte";

  import { registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";

  import { focusNextElement } from "$lib/utils.js";

  import type SliderInput from "$lib/models/SliderInput.js";
  import SliderInputComponent from "$lib/input_handling/SliderInputComponent.js";

  interface Props {
    onpressed?: () => void,
    value?: number
    min?: number
    max?: number
    step?: number
    disabled?: boolean
    inputMapping?: SliderInput
    context?: string[]
    requiresFocus?: boolean
  }
  let {
    value = $bindable(50),
    onpressed = undefined,
    min = 0,
    max = 100,
    step = 10,
    disabled = false,
    inputMapping = {
      name: 'Slider',
      gamepad: -1,
      sensitivity: 0.05,
      axes: 0,
      buttons: [GamepadButtons.DOWN], // activate/focus next component
      buttons_neg: [GamepadButtons.L1, GamepadButtons.DPAD_LEFT],
      buttons_pos: [GamepadButtons.R1, GamepadButtons.DPAD_RIGHT],
      keys_pos: ['d'],
      keys_neg: ['a'],
      keys: ['e', 'enter'],  // activate/focus next component
      invert: false
    },
    context=['default'],
    requiresFocus = true
  }: Props = $props();

  let element: HTMLElement;

  export function getElement(): HTMLElement {
    return element;
  }

  function _onpressed() {
    focusNextElement();
    if (onpressed) onpressed();
  }

  onMount(() => {
    const slid = new SliderInputComponent(
      inputMapping,
      (_value: number) => { value = _value; },
      () => {return value;},
      min, max, step,
      element, requiresFocus,  _onpressed);
    registerComponent(context, slid);
    return () => {
      unregisterComponent(context, slid);
    }
  })
</script>

<div class="vslider">
  <Hint
    text="" {context}
    keys={inputMapping.keys_neg}
    buttons={inputMapping.buttons_neg}
    style={"position: absolute; top: 60px;"}
    />

  <input
    bind:this={element}
    type="range"
    {min} {max} {step} bind:value {disabled} style:width="100%;">

  <Hint
    text="" {context}
    keys={inputMapping.keys_pos}
    buttons={inputMapping.buttons_pos}
    style={"position: absolute; top: 60px; right: -70px;"}
    />
</div>
<style>

  .vslider {
    position: relative;
    padding: 20px;
    width: 200px;
  }

</style>