<script lang="ts">

  import keyboard_plus from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_plus.svg?raw"
  import keyboard_minus from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_minus.svg?raw"
  import keyboard_tilde from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_tilde.svg?raw"
  import keyboard_space_icon from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_space_icon.svg?raw"
  import keyboard_backspace_icon from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_backspace_icon.svg?raw"
  import keyboard_capslock_icon from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_capslock_icon.svg?raw"
  import keyboard_tab_icon from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_tab_icon.svg?raw"
  import keyboard_shift_icon from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_shift_icon.svg?raw"
  import keyboard_arrows_left from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_arrows_left.svg?raw"
  import keyboard_arrows_right from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_arrows_right.svg?raw"
  import keyboard_arrows_up from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_arrows_up.svg?raw"
  import keyboard_arrows_down from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_arrows_down.svg?raw"
  import keyboard_page_down from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_page_down.svg?raw"
  import keyboard_page_up from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_page_up.svg?raw"
  import keyboard_end from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_end.svg?raw"
  import keyboard_home from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_home.svg?raw"
  import keyboard_ctrl from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_ctrl.svg?raw"
  import keyboard_return from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_return.svg?raw"
  import keyboard_a from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_a.svg?raw"
  import keyboard_b from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_b.svg?raw"
  import keyboard_c from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_c.svg?raw"
  import keyboard_d from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_d.svg?raw"
  import keyboard_e from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_e.svg?raw"
  import keyboard_f from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_f.svg?raw"
  import keyboard_g from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_g.svg?raw"
  import keyboard_h from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_h.svg?raw"
  import keyboard_i from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_i.svg?raw"
  import keyboard_j from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_j.svg?raw"
  import keyboard_k from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_k.svg?raw"
  import keyboard_l from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_l.svg?raw"
  import keyboard_m from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_m.svg?raw"
  import keyboard_n from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_n.svg?raw"
  import keyboard_o from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_o.svg?raw"
  import keyboard_p from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_p.svg?raw"
  import keyboard_q from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_q.svg?raw"
  import keyboard_r from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_r.svg?raw"
  import keyboard_s from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_s.svg?raw"
  import keyboard_t from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_t.svg?raw"
  import keyboard_u from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_u.svg?raw"
  import keyboard_v from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_v.svg?raw"
  import keyboard_w from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_w.svg?raw"
  import keyboard_x from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_x.svg?raw"
  import keyboard_y from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_y.svg?raw"
  import keyboard_z from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_z.svg?raw"
  import keyboard_0 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_0.svg?raw"
  import keyboard_1 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_1.svg?raw"
  import keyboard_2 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_2.svg?raw"
  import keyboard_3 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_3.svg?raw"
  import keyboard_4 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_4.svg?raw"
  import keyboard_5 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_5.svg?raw"
  import keyboard_6 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_6.svg?raw"
  import keyboard_7 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_7.svg?raw"
  import keyboard_8 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_8.svg?raw"
  import keyboard_9 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_9.svg?raw"
  import keyboard_f1 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_f1.svg?raw"
  import keyboard_f2 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_f2.svg?raw"
  import keyboard_f3 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_f3.svg?raw"
  import keyboard_f4 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_f4.svg?raw"
  import keyboard_f5 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_f5.svg?raw"
  import keyboard_f6 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_f6.svg?raw"
  import keyboard_f7 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_f7.svg?raw"
  import keyboard_f8 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_f8.svg?raw"
  import keyboard_f9 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_f9.svg?raw"
  import keyboard_f10 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_f10.svg?raw"
  import keyboard_f11 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_f11.svg?raw"
  import keyboard_f12 from "$lib/assets/kenney_input_prompts/keyboard_mouse/keyboard_f12.svg?raw"

  import playstation_button_color_cross from "$lib/assets/kenney_input_prompts/ps/playstation_button_color_cross.svg?raw"
  import playstation_button_color_circle from "$lib/assets/kenney_input_prompts/ps/playstation_button_color_circle.svg?raw"
  import playstation_button_color_square from "$lib/assets/kenney_input_prompts/ps/playstation_button_color_square.svg?raw"
  import playstation_button_color_triangle from "$lib/assets/kenney_input_prompts/ps/playstation_button_color_triangle.svg?raw"
  import playstation_trigger_l1 from "$lib/assets/kenney_input_prompts/ps/playstation_trigger_l1.svg?raw"
  import playstation_trigger_r1 from "$lib/assets/kenney_input_prompts/ps/playstation_trigger_r1.svg?raw"
  import playstation_trigger_l2 from "$lib/assets/kenney_input_prompts/ps/playstation_trigger_l2.svg?raw"
  import playstation_trigger_r2 from "$lib/assets/kenney_input_prompts/ps/playstation_trigger_r2.svg?raw"
  import playstation4_button_share from "$lib/assets/kenney_input_prompts/ps/playstation4_button_share.svg?raw"
  import playstation4_button_options from "$lib/assets/kenney_input_prompts/ps/playstation4_button_options.svg?raw"
  import playstation_stick_l_down from "$lib/assets/kenney_input_prompts/ps/playstation_stick_l_down.svg?raw"
  import playstation_stick_r_down from "$lib/assets/kenney_input_prompts/ps/playstation_stick_r_down.svg?raw"
  import playstation_dpad_up from "$lib/assets/kenney_input_prompts/ps/playstation_dpad_up.svg?raw"
  import playstation_dpad_down from "$lib/assets/kenney_input_prompts/ps/playstation_dpad_down.svg?raw"
  import playstation_dpad_left from "$lib/assets/kenney_input_prompts/ps/playstation_dpad_left.svg?raw"
  import playstation_dpad_right from "$lib/assets/kenney_input_prompts/ps/playstation_dpad_right.svg?raw"
  import playstation_button_circle from "$lib/assets/kenney_input_prompts/ps/playstation_button_circle.svg?raw"
  import playstation_stick_l from "$lib/assets/kenney_input_prompts/ps/playstation_stick_l.svg?raw"
  import playstation_stick_r from "$lib/assets/kenney_input_prompts/ps/playstation_stick_r.svg?raw"

  interface Props {
    type: 'keyboard_mouse' | 'ps4' | 'ps5' | 'xbox' | 'steam'
    input: string | number,
    width?: number,
    height?: number,
    color?: string
  }
  let {
    type,
    input,
    width = 40,
    height = 40,
    color = '#666666'
  }: Props = $props();

  const ps4_buttons = {
  
    '0': playstation_button_color_cross,
    '1': playstation_button_color_circle,
    '2': playstation_button_color_square,
    '3': playstation_button_color_triangle,
    '4': playstation_trigger_l1,
    '5': playstation_trigger_r1,
    '6': playstation_trigger_l2,
    '7': playstation_trigger_r2,
    '8': playstation4_button_share,
    '9': playstation4_button_options,
    '10': playstation_stick_l_down,
    '11': playstation_stick_r_down,
    '12': playstation_dpad_up,
    '13': playstation_dpad_down,
    '14': playstation_dpad_left,
    '15': playstation_dpad_right,
    '16': playstation_button_circle,
    'axis_left': playstation_stick_l,
    'axis_right': playstation_stick_r,
  };
  const keyboard = {
  
    '+': keyboard_plus,
    '-': keyboard_minus,
    '~': keyboard_tilde,
    ' ': keyboard_space_icon,
    'backspace': keyboard_backspace_icon,
    'capslock': keyboard_capslock_icon,
    'tab': keyboard_tab_icon,
    'shift': keyboard_shift_icon,
    'arrowleft': keyboard_arrows_left,
    'arrowright': keyboard_arrows_right,
    'arrowup': keyboard_arrows_up,
    'arrowdown': keyboard_arrows_down,
    'pagedown': keyboard_page_down,
    'pageup': keyboard_page_up,
    'end': keyboard_end,
    'home': keyboard_home,
    'control': keyboard_ctrl,
    'enter': keyboard_return,
    'a': keyboard_a,
    'b': keyboard_b,
    'c': keyboard_c,
    'd': keyboard_d,
    'e': keyboard_e,
    'f': keyboard_f,
    'g': keyboard_g,
    'h': keyboard_h,
    'i': keyboard_i,
    'j': keyboard_j,
    'k': keyboard_k,
    'l': keyboard_l,
    'm': keyboard_m,
    'n': keyboard_n,
    'o': keyboard_o,
    'p': keyboard_p,
    'q': keyboard_q,
    'r': keyboard_r,
    's': keyboard_s,
    't': keyboard_t,
    'u': keyboard_u,
    'v': keyboard_v,
    'w': keyboard_w,
    'x': keyboard_x,
    'y': keyboard_y,
    'z': keyboard_z,
    '0': keyboard_0,
    '1': keyboard_1,
    '2': keyboard_2,
    '3': keyboard_3,
    '4': keyboard_4,
    '5': keyboard_5,
    '6': keyboard_6,
    '7': keyboard_7,
    '8': keyboard_8,
    '9': keyboard_9,
    'f1': keyboard_f1,
    'f2': keyboard_f2,
    'f3': keyboard_f3,
    'f4': keyboard_f4,
    'f5': keyboard_f5,
    'f6': keyboard_f6,
    'f7': keyboard_f7,
    'f8': keyboard_f8,
    'f9': keyboard_f9,
    'f10': keyboard_f10,
    'f11': keyboard_f11,
    'f12': keyboard_f12,
  };

  let icon = $state<string | undefined>();
  let base_type: string = type;
  if (['ps4', 'ps5'].includes(type)) {
    base_type = 'ps';
  }
  switch (type) {
    case 'keyboard_mouse':
      let inp = (input as string).toLowerCase();
      icon = keyboard[inp];
      break;
    case 'ps4':
      icon = ps4_buttons[input];
  }

</script>
{#if icon}
<div 
    class="svg-container"
    style:height="{height}px"
    style:width="{width}px">
  {@html icon
    .replace('<g>', `<g transform="scale(${Math.min(width/64, height/64)})">`)
    .replace('fill="#FFFFFF"', `fill="${color}"`)
  }
</div>
{/if}

<style>
  .svg-container {
    display: inline-block;
    vertical-align: middle;
  }

  .svg-container svg {
    width: 100%;
    height: 100%;
  }
</style>