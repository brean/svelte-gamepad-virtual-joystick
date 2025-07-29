<script lang="ts">
    import GamepadButtons from "$lib/constants/GamepadButtons.js";
    import type SliderInput from "$lib/models/SliderInput.js";
    import { component_store } from "$lib/state/components.svelte.js";
    import { fade } from "svelte/transition";
    import SliderBase from "./SliderBase.svelte";
    import Icon from "./Icon.svelte";

  interface Props {
    value?: number
    min?: number
    max?: number
    step?: number
    disabled?: boolean
    inputMapping?: SliderInput
    focussed?: boolean
  }

  let {
    value = $bindable(50),
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
      keys_pos: ['arrowright'],
      keys_neg: ['arrowleft'],
      keys: ['e', 'enter'],  // activate/focus next component
      invert: false
    },
    focussed = $bindable<boolean>(false)
  }: Props = $props();

</script>

<SliderBase 
  {disabled}
  {inputMapping}
  {step}
  {min}
  {max}
  bind:value
  ></SliderBase>
<div class="vslider">
{#if component_store.showHints}
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

  <input type="range" {min} {max} {step} bind:value {disabled} style:width="100%;">

{#if component_store.showHints}
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