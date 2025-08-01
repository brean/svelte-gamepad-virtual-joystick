<script lang="ts">
    import GamepadButtons from "$lib/constants/GamepadButtons.js";
    import type SliderInput from "$lib/models/SliderInput.js";
    import { component_state, registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";
    import { fade } from "svelte/transition";
    import Icon from "./Icon.svelte";
    import { onMount } from "svelte";
    import SliderInputComponent from "$lib/input_handling/SliderInputComponent.js";
    import { focusNextElement } from "$lib/utils.js";

  interface Props {
    onpressed?: (() => boolean),
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

  let focusElement: HTMLElement;

  function _onpressed(): boolean {
    focusNextElement();
    return onpressed ? onpressed() : false;
  }

  onMount(() => {
    const slid = new SliderInputComponent(
      inputMapping, focusElement, requiresFocus, 
      _onpressed);
    slid.setValue = (_value: number) => { value = _value; };
    slid.getValue = () => {return value;};
    slid.max = max;
    slid.min = min;
    slid.step = step;
    registerComponent(context, slid);
    return () => {
      unregisterComponent(context, slid);
    }
  })
</script>

<div class="vslider">
{#if component_state.showHints && context.includes(component_state.context)}
  <div class="hint-container hint-left" out:fade in:fade>
    <div class="hint">
      {#if inputMapping.keys_neg.length > 0 }
        <Icon
          type='keyboard_mouse'
          input={inputMapping.keys_neg[0]}></Icon>
      {/if}
      {#if inputMapping.buttons_neg.length > 0 }
        <Icon
          type='generic'
          input={inputMapping.buttons_neg[0]}></Icon>
      {/if}
    </div>
  </div>
{/if}

  <input
    bind:this={focusElement}
    type="range"
    {min} {max} {step} bind:value {disabled} style:width="100%;">

{#if component_state.showHints && context.includes(component_state.context)}
  <div class="hint-container hint-right" out:fade in:fade>
    <div class="hint">
      {#if inputMapping.keys_pos.length > 0 }
        <Icon
          type='keyboard_mouse'
          input={inputMapping.keys_pos[0]}></Icon>
      {/if}
      {#if inputMapping.buttons_pos.length > 0 }
        <Icon
          type='generic'
          input={inputMapping.buttons_pos[0]}></Icon>
      {/if}
    </div>
  </div>
{/if}
</div>
<style>

  .vslider {
    position: relative;
    padding: 20px;
    width: 200px;
  }

  .vslider .hint-container.hint-left {
    position: absolute;
    top: 90%;
  }

  .vslider .hint-container.hint-right {
    right: -80px;
    position: absolute;
    top: 90%;
  }

</style>