<script lang="ts">
    import GamepadButtons from "$lib/constants/GamepadButtons.js";
    import type ListInput from "$lib/models/ListInput.js";
    import { fade } from "svelte/transition";
    import Icon from "./Icon.svelte";
      import { component_state, registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";
    import { onMount } from "svelte";
    import ListInputComponent from "$lib/input_handling/ListInputComponent.js";
    import { focusNextElement } from "$lib/utils.js";

  interface Props {
    items: string[]
    onpressed?: () => boolean
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

  function changeSelected(): boolean {
    selectedIndex = focussed;
    if (onpressed) {
      return onpressed();
    }
    focusNextElement();
    return true;
  }

  let focusElement: HTMLElement;

  onMount(() => {
    const lst = new ListInputComponent(
      inputMapping, focusElement, requiresFocus,
      changeSelected);

    lst.changeFocus = (direction: 1 | -1) => {
      focusItemAtIndex(focussed+direction);
    };
    registerComponent(context, lst);
    return () => {
      unregisterComponent(context, lst);
    }
  });

</script>

<div class={cssclass} tabindex={0} role="button" bind:this={focusElement}>
  {#if component_state.showHints && context.includes(component_state.context)}
  <div class="hint-container" out:fade in:fade>
    <div class="hint">
      ↑
      {#if inputMapping.keys_prev.length > 0 }
        <Icon 
          type='keyboard_mouse'
          input={inputMapping.keys_prev[0]}></Icon>
      {/if}
      {#if inputMapping.buttons_prev.length > 0 }
        <Icon
          type='generic'
          input={inputMapping.buttons_prev[0]}></Icon>
      {/if}
    </div>
  </div>
  <div class="hint-center">
    <div class="hint-container" out:fade in:fade>
      <div class="hint">
        {#if inputMapping.keys.length > 0 }
          <Icon 
            type='keyboard_mouse'
            input={inputMapping.keys[0]}></Icon>
        {/if}
        {#if inputMapping.buttons.length > 0 }
          <Icon
            type='generic'
            input={inputMapping.buttons[0]}></Icon>
        {/if}
      </div>
    </div>
  </div>
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

  {#if component_state.showHints && context.includes(component_state.context)}
    <div class="hint-container" out:fade in:fade>
      <div class="hint">
        ↓
        {#if inputMapping.keys_next.length > 0 }
          <Icon 
            type='keyboard_mouse'
            input={inputMapping.keys_next[0]}></Icon>
        {/if}
        {#if inputMapping.buttons_next.length > 0 }
          <Icon
            type='generic'
            input={inputMapping.buttons_next[0]}></Icon>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  .hint-container {
    left: 50%;
  }

  .hint-center .hint-container {
    top: 50%;
  }

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