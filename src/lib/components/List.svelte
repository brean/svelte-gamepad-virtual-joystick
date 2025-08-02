<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import type ListInput from "$lib/models/ListInput.js";

  import Icon from "./Icon.svelte";
  import GamepadButtons from "$lib/constants/GamepadButtons.js";

  import ListInputComponent from "$lib/input_handling/ListInputComponent.js"; 
  import { component_state, registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";
  import { focusNextElement } from "$lib/utils.js";
  import Hint from "./Hint.svelte";

  interface Props {
    items: string[]
    onpressed?: () => void
    disabled?: boolean
    wrap?: boolean  // prev of first is last, next of last is first.
    style?: string
    cssclass?: string
    focussed?: number
    selectedIndex?: number
    inputMapping?: ListInput
    context?: string[]
    requiresFocus?: boolean
  }

  let {
    items,
    onpressed = undefined,
    disabled = false,
    wrap = true,
    style = '',
    cssclass = 'vlist',
    selectedIndex = $bindable(0),
    focussed = $bindable(0),
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
      keys: ['enter', 'r']  // activate
    },
    context=['default'],
    requiresFocus=true
  }: Props = $props();

  function classStr(index: number) {
    let clz = 'item';
    clz += selectedIndex === index ? ' selected' : '';
    if (focussed === index) {
      clz += ' focussed'
    }
    return clz
  }

  function focusItemAtIndex(new_idx: number) {
    if (new_idx >= items.length) {
      new_idx = wrap ? 0 : items.length - 1;
    }
    if (new_idx < 0) {
      new_idx = wrap ? items.length -1 : 0;
    }
    focussed = new_idx;
  }

  function changeSelected(): void {
    selectedIndex = focussed;
    if (onpressed) {
      onpressed();
    }
    focusNextElement();
  }

  let element: HTMLElement;

  export function getElement(): HTMLElement {
    return element;
  }

  onMount(() => {
    const lst = new ListInputComponent(
      inputMapping, 
      (direction: 1 | -1) => {focusItemAtIndex(focussed+direction);},
      element, requiresFocus, changeSelected);
    registerComponent(context, lst);
    return () => {
      unregisterComponent(context, lst);
    }
  });

</script>

<div class={cssclass} tabindex={0} role="button" bind:this={element}>
  {#if component_state.showHints && context.includes(component_state.context)}

    <Hint 
      text="↑" {context}
      keys={inputMapping.keys_prev}
      buttons={inputMapping.buttons_prev}
      style={'left: 50%;'}
      />

    <Hint 
      {context}
      keys={inputMapping.keys}
      buttons={inputMapping.buttons}
      style={'left: 50%; top: 50%'}
      />
  {/if}

  <ul {style} >
  {#each items as item, index}
    <li 
      class={classStr(index)}
      onpointerdown={() => {
        if (disabled) {
          return
        }
        focussed = index;
        changeSelected()
      }}
      onpointerenter={() => {
        if (disabled) {
          return
        }
        focussed = index;
      }}
      >{item}</li>
  {/each}
  </ul>

  <Hint 
    text="↓" {context}
    keys={inputMapping.keys_next}
    buttons={inputMapping.buttons_next}
    style={'left: 50%;'}
    />
</div>

<style>
  .hint-center {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; 
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }

  .vlist {
    position: relative;
  }
</style>