import type Input from "./Input.js";

// Configuration and axes/button mapping for a VirtualButton
export default interface ButtonInput extends Input {
  gamepad_buttons: number[];
  keyboard_keys: string[];
}