<script lang="ts">
  import type VirtualListInput from "$lib/models/VirtualListInput.js";
  import { gamepad_listener } from "$lib/store/gamepad_listener.js";
  import { keyboard_listener } from "$lib/store/keyboard_listener.js";
  import { virtual_list_inputs } from "$lib/store/virtual_list_inputs.js";
  import { onMount } from "svelte";


  interface Props {
    items: string[]
    onpress: (item: string, index: number) => void
    oncancel: () => void
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
    onpress,
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
      gamepad_cancel_buttons: [1],
      gamepad_prev_buttons: [12],  // up
      gamepad_next_buttons: [13],  // down
      keyboard_prev_keys: ['ArrowUp', 'w'],
      keyboard_next_keys: ['ArrowDown', 's'],
      keyboard_keys: ['e'],
      keyboard_cancel_keys: ['Escape']
    }
  }: Props = $props();

  let btnDown = -1; // which button has been pressed - to prevent re-pressing
  let axesDown = -1; // ...same for axes
  let gamepadActive = true;

  $virtual_list_inputs.push(input_mapping);

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

  function process_btn_press(btnIndex: number, press_cb: () => void): boolean {
    if (btnDown == btnIndex) {
      // button has already pressed before, ignored
      return false;
    }
    press_cb();
    btnDown = btnIndex;
    return true;
  }

  function check_buttons(gamepad: Gamepad, buttons: number[], onpress: () => void): boolean {
    for (const btnIdx of buttons) {
      if (btnIdx > gamepad.buttons.length) {
        continue;
      }
      if (gamepad.buttons[btnIdx].pressed) {
        return process_btn_press(btnIdx, onpress);
      }
    }
    return false
  }

  function gamepad_update(gamepad: Gamepad) {
    if (disabled || !gamepadActive || input_mapping.gamepad !== -1 && gamepad.index !== input_mapping.gamepad) {
      return;
    }
    // check if we need to reset the button/keyup-event;
    if (btnDown > 0 && !gamepad.buttons[btnDown].pressed)  {
      btnDown = -1;
    }
    if (check_buttons(
      gamepad, input_mapping.gamepad_cancel_buttons, () => {
        if (oncancel) {
          oncancel();
        }
      })) {
        // we return here to make sure we don't call the press-action
        // if we call the cancel action, preventing an accept-cancel loop
        return
    };
    check_buttons(
      gamepad, input_mapping.gamepad_buttons, () => {
        selected = hovering;
        if (onpress) {
          onpress(items[selected], selected);
        }
      })
    check_buttons(
      gamepad, input_mapping.gamepad_next_buttons, () => {
        update_hovering(hovering + 1);
      });
    check_buttons(
      gamepad, input_mapping.gamepad_prev_buttons, () => {
        update_hovering(hovering - 1);
      });
    // check axis
    for (const axesIdx of input_mapping.gamepad_axes) {
      const value = gamepad.axes[axesIdx];
      let sensitivity = input_mapping.gamepad_axes_sens;
      if (value < -sensitivity && axesDown != axesIdx) {
        update_hovering(hovering - 1);
        axesDown = axesIdx;
        btnDown = -1;
        continue;
      }
      if (value > sensitivity && axesDown != axesIdx) {
        update_hovering(hovering + 1);
        axesDown = axesIdx;
        btnDown = -1;
        continue;
      }
      if (value < sensitivity && value > -sensitivity) {
        axesDown = -1;
      }
    }
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

  function key_update(event: KeyboardEvent) {
    if (disabled) {
      return
    }
    if (input_mapping.keyboard_cancel_keys.indexOf(event.key) > -1) {
      if (event.type === 'keyup') {
        console.log('cancel')
        oncancel();
        return;
      }
    }
    if (input_mapping.keyboard_keys.indexOf(event.key) > -1) {
      if (event.type === 'keyup') {
        selected = hovering;
        if (onpress) {
          onpress(items[selected], selected);
        }
        return;
      }
    }
    if (input_mapping.keyboard_next_keys.indexOf(event.key) > -1) {
      if (event.type === 'keydown') {
        update_hovering(hovering + 1);
        return;
      }
    }
    if (input_mapping.keyboard_prev_keys.indexOf(event.key) > -1) {
      if (event.type === 'keydown') {
        update_hovering(hovering - 1);
        return;
      }
    }
  }

  onMount(() => {
    $gamepad_listener = [...$gamepad_listener, gamepad_update];
    $keyboard_listener = [...$keyboard_listener, key_update];
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
        if(onpress) {
          onpress(item, index);
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