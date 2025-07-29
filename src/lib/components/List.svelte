<script lang="ts">
    import GamepadButtons from "$lib/constants/GamepadButtons.js";
  import type ListInput from "$lib/models/ListInput.js";
  import ListBase from "./ListBase.svelte";

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
  }

  let {
    items,
    onpressed,
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
      keys_prev: ['ArrowUp', 'w'],
      keys_next: ['ArrowDown', 's'],
      keys: ['r']  // activate
    }
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

  function changeFocus(direction: 1 | -1) {
    focusItemAtIndex(focussed+direction);
  }

  function changeSelected(): boolean {
    selectedIndex = focussed;
    if (onpressed) {
      return onpressed();
    }
    return false;
  }


</script>

<ListBase
  {changeFocus}
  onpressed={changeSelected}
  {disabled}
  {inputMapping}
  ></ListBase>
<div class={cssclass} tabindex={0} role="button">
  <ul {style} >
  {#each items as item, index}
    <li 
      class={classStr(index)}
      onpointerdown={() => {
        if (disabled) {
          return
        }
        selectedIndex = index;
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
</div>
