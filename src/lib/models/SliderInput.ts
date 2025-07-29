import type Input from "./Input.js";

export default interface SliderInput extends Input {
  // Gamepad
  axes: number;
  sensitivity: number;
  buttons_pos: number[];
  buttons_neg: number[];
  buttons: number[]
  // Keyboard
  keys_pos: string[];
  keys_neg: string[];
  keys: string[];
  invert: boolean;
}