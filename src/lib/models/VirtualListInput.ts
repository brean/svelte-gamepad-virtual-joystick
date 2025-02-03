// Configuration and axes/button mapping for a VirtualButton
export default interface VirtualListInput {
    name: string;
    gamepad: number;
    gamepad_axes: number[];
    gamepad_axes_sens: number;
    gamepad_buttons: number[];
    gamepad_cancel_buttons: number[];
    gamepad_prev_buttons: number[];
    gamepad_next_buttons: number[];
    keyboard_prev_keys: string[];
    keyboard_next_keys: string[];
    keyboard_keys: string[];
    keyboard_cancel_keys: string[];
  }