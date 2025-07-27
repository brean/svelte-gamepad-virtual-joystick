<script lang="ts">

  interface Props {
    type: 'keyboard_mouse' | 'ps4' | 'ps5' | 'xbox' | 'steam'
    input: string | number
    invert_colors?: boolean
  }
  let {
    type,
    input,
    invert_colors = false
  }: Props = $props();

  const ps4_buttons = {
    0: 'playstation_button_color_cross',
    1: 'playstation_button_color_circle',
    2: 'playstation_button_color_square',
    3: 'playstation_button_color_triangle',
    4: 'playstation_trigger_l1',
    5: 'playstation_trigger_r1',
    6: 'playstation_trigger_l2',
    7: 'playstation_trigger_r2',
    8: 'playstation4_button_share',
    9: 'playstation4_button_options',
    10: 'playstation_stick_l_down',
    11: 'playstation_stick_r_down',
    12: 'playstation_dpad_up',
    13: 'playstation_dpad_down',
    14: 'playstation_dpad_left',
    15: 'playstation_dpad_right',
    16: 'playstation_button_circle',
    'axis_left': 'playstation_stick_l',
  }

  // map to the original kenney file names - makes updating easier.
  const keyboard = {
    ' ': 'space_icon',
    'backspace': 'backspace_icon',
    'capslock': 'capslock_icon',
    'tab': 'tab_icon',
    'shift': 'shift_icon',
    'arrowleft': 'arrows_left',
    'arrowright': 'arrows_right',
    'arrowup': 'arrows_up',
    'arrowdown': 'arrows_down',
    'pagedown': 'page_down',
    'pageup': 'page_up',
    'control': 'ctrl'
  }

  const base = '/svelte-gamepad-virtual-joystick/kenney_input_prompts/';
  let filename;
  let base_type: string = type;
  if (['ps4', 'ps5'].includes(type)) {
    base_type = 'ps';
  }
  switch (type) {
    case 'keyboard_mouse':
      let inp = (input as string).toLowerCase();
      if (inp in keyboard) {
        inp = keyboard[inp];
      }
      filename = `keyboard_${inp}`;
      break;
    case 'ps4':
      filename = ps4_buttons[input];
      if (input < 5) {
        invert_colors = false;
      }
  }
  let uri = `${base}${base_type}/${filename}.svg`;

</script>
<img
  style="vertical-align:middle" width="40px" 
  class={invert_colors ? 'invert-icon': ''}
  src={uri} alt="key" />
<style>
  .invert-icon {
    filter: invert(70%);
  }
</style>