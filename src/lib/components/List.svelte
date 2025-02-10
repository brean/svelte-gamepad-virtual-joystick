<script lang="ts">
  import type ListInput from "$lib/models/ListInput.js";
  import ListBase from "./ListBase.svelte";

  interface Props {
    items: string[]
    onpressed?: () => void
    disabled?: boolean
    wrap?: boolean  // prev of first is last, next of last is first.
    style?: string
    cssclass?: string
    focussed?: number
    selectedIndex?: number
    input_mapping?: ListInput
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
    input_mapping = {
      name: 'List',
      gamepad: -1,
      gamepad_axes: [1],
      gamepad_axes_sens: 0.05, // sensitivity - at what value do we react to the axes movement?
      gamepad_buttons: [0],
      gamepad_prev_buttons: [12],  // up
      gamepad_next_buttons: [13],  // down
      keyboard_prev_keys: ['ArrowUp', 'w'],
      keyboard_next_keys: ['ArrowDown', 's'],
      keyboard_keys: ['e']
    }
  }: Props = $props();

  function classStr(index: number) {
    let clz = ''
    if (selectedIndex === index) {
      clz += 'selected '
    }
    if (focussed === index) {
      clz += 'focussed '
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

  function changeSelected() {
    selectedIndex = focussed;
    if (onpressed) {
      onpressed();
    }
  }


</script>

<ListBase
  {changeFocus}
  onpressed={changeSelected}
  {disabled}
  {input_mapping}
  bind:focussed
  ></ListBase>
<ul {style} class={cssclass}>
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
