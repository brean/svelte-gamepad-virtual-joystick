import type Input from "./Input.js";

// Configuration and axes/button mapping for a List to focus next/previous item and select it
export default interface ListInput extends Input {
    gamepad_axes: number[];
    gamepad_axes_sens: number;
    gamepad_buttons: number[];
    gamepad_prev_buttons: number[];
    gamepad_next_buttons: number[];
    keyboard_prev_keys: string[];
    keyboard_next_keys: string[];
    keyboard_keys: string[];
  }