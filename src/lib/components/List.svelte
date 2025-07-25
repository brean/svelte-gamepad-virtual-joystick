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
      axes: [1],
      sensitivity: 0.05, // sensitivity - at what value do we react to the axes movement?
      buttons: [0],
      buttons_prev: [12],  // up
      buttons_next: [13],  // down
      keys_prev: ['ArrowUp', 'w'],
      keys_next: ['ArrowDown', 's'],
      keys: ['e']  // activate
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
