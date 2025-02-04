<script lang="ts">
  import type VirtualListInput from "$lib/models/VirtualListInput.js";
  import { virtual_inputs } from "$lib/store/virtual_input.svelte.js";
  import { onMount } from "svelte";
  import { onkeypressed, onkeyrelease } from '$lib/store/keyboard_callbacks.svelte.js'
  import { onbuttonpressed, onbuttonrelease, onupdate } from '$lib/store/gamepad_callbacks.svelte.js';

  interface Props {
    items: string[]
    onpressed: (item: string, index: number) => void
    oncancel?: () => void
    disabled?: boolean
    wrap?: boolean  // prev of first is last, next of last is first.
    style?: string
    cssclass?: string
    hovering?: number
    selected?: number
    input_mapping?: VirtualListInput
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
    hovering = 0,
    input_mapping = {
      name: 'Virtual List',
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

  virtual_inputs.lists.push(input_mapping);
  const _virtual_input = virtual_inputs.lists[virtual_inputs.lists.length - 1];


  let axesDown = -1;
  let lstParent: HTMLElement;

  function classStr(index: number) {
    let clz = ''
    if (selected === index) {
      clz += 'selected '
    }
    if (hovering === index) {
      clz += 'hovering '
    }
    return clz
  }

  function update_hovering(new_idx: number) {
    if (new_idx >= items.length) {
      new_idx = wrap ? 0 : items.length - 1;
    }
    if (new_idx < 0) {
      new_idx = wrap ? items.length -1 : 0;
    }
    hovering = new_idx;
  }

  function thisGamepad(gamepad: Gamepad): boolean {
    return _virtual_input.gamepad === -1 ||
      _virtual_input.gamepad === gamepad.index;
  }

  onMount(() => {
    const _custom_onpressed = (event: KeyboardEvent) => {
      if (disabled) {
        return
      }
      if (oncancel &&
          input_mapping.keyboard_cancel_keys.indexOf(event.key) > -1) {
        oncancel();
        // cancel is exclusive, prevent other components from accessing this button
        return true;
      }
      if (input_mapping.keyboard_keys.indexOf(event.key) > -1) {
        selected = hovering;
        onpressed(items[selected], selected);
        return;
      }
      if (input_mapping.keyboard_next_keys.indexOf(event.key) > -1) {
        update_hovering(hovering + 1);
        return;
      }
      if (input_mapping.keyboard_prev_keys.indexOf(event.key) > -1) {
        update_hovering(hovering - 1);
      }
    }

    const _custom_buttonpressed = (gamepad: Gamepad, button: number) => {
      if (disabled || !thisGamepad(gamepad)) {
        return
      }
      if (oncancel &&
          input_mapping.gamepad_cancel_buttons.indexOf(button) > -1) {
        oncancel();
        // cancel is exclusive, prevent other components from accessing this button
        return true;
      }
      if (input_mapping.gamepad_buttons.indexOf(button) > -1) {
        selected = hovering;
        onpressed(items[selected], selected);
        return;
      }
      if (input_mapping.gamepad_next_buttons.indexOf(button) > -1) {
        update_hovering(hovering + 1);
        return;
      }
      if (input_mapping.gamepad_prev_buttons.indexOf(button) > -1) {
        update_hovering(hovering - 1);
        return;
      }
    }

    const _custom_gamepadupdate = (gamepad: Gamepad) => {
      if (disabled || !thisGamepad(gamepad)) {
        return
      }
      for (const axesIdx of input_mapping.gamepad_axes) {
        const value = gamepad.axes[axesIdx];
        let sensitivity = input_mapping.gamepad_axes_sens;
        if (value < -sensitivity && axesDown != axesIdx) {
          update_hovering(hovering - 1);
          axesDown = axesIdx;
          continue;
        }
        if (value > sensitivity && axesDown != axesIdx) {
          update_hovering(hovering + 1);
          axesDown = axesIdx;
          continue;
        }
        if (value < sensitivity && value > -sensitivity) {
          axesDown = -1;
        }
      }
    }

    // keyboard
    onkeypressed.push(_custom_onpressed);
    // gamepad
    onbuttonpressed.push(_custom_buttonpressed);
    onupdate.push(_custom_gamepadupdate);
    return () => {
      // cleanup on destroy
      // keyboard
      onkeypressed.splice(onkeypressed.indexOf(_custom_onpressed), 1);
      // gamepad
      onbuttonpressed.splice(onbuttonpressed.indexOf(_custom_buttonpressed), 1);
      onupdate.splice(onupdate.indexOf(_custom_gamepadupdate), 1);
      // unregister configuration
      virtual_inputs.lists.splice(virtual_inputs.lists.indexOf(_virtual_input), 1);
    }
  });
</script>

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
        hovering = index;
      }}
      >{item}</li>
  {/each}
</ul>