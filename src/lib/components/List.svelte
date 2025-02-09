<script lang="ts">
  import type ListInput from "$lib/models/ListInput.js";
  import ListBase from "./ListBase.svelte";

  interface Props {
    items: string[]
    onpressed: (item: string, index: number) => void
    oncancel?: () => void
    disabled?: boolean
    wrap?: boolean  // prev of first is last, next of last is first.
    style?: string
    cssclass?: string
    focussed?: number
    selected?: number
    input_mapping?: ListInput
  }

  let {
    items,
    onpressed,
    oncancel,
    disabled = false,
    wrap = true,
    style = '',
    cssclass = 'vlist',
    selected = 0,
    focussed = 0,
    input_mapping = {
      name: 'List',
      gamepad: -1,
      gamepad_axes: [1],
      gamepad_axes_sens: 0.05, // sensitivity - at what value do we react to the axes movement?
      gamepad_buttons: [0],
      gamepad_cancel_buttons: [9],
      gamepad_prev_buttons: [12],  // up
      gamepad_next_buttons: [13],  // down
      keyboard_prev_keys: ['ArrowUp', 'w'],
      keyboard_next_keys: ['ArrowDown', 's'],
      keyboard_keys: ['e'],
      keyboard_cancel_keys: ['Escape', 'q']
    }
  }: Props = $props();

  function classStr(index: number) {
    let clz = ''
    if (selected === index) {
      clz += 'selected '
    }
    if (focussed === index) {
      clz += 'focussed '
    }
    return clz
  }

  let lstParent: HTMLElement;
</script>

<ListBase
  {items}
  {onpressed}
  {oncancel}
  {disabled}
  {wrap}
  {input_mapping}
  bind:selected
  bind:focussed
  ></ListBase>
<ul bind:this={lstParent} {style} class={cssclass}>
  {#each items as item, index}
    <li 
      class={classStr(index)}
      onpointerdown={() => {
        if (disabled) {
          return
        }
        selected = index;
        if(onpressed) {
          onpressed(item, index);
        }
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
