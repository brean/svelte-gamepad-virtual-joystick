import type Input from "./Input.js";

// Configuration and axes/button mapping for a List to focus next/previous item and select it
export default interface ListInput extends Input {
  // Gamepad  
  axes: number[];
  sensitivity: number; // axes sensitivity
  buttons: number[];  // activate buttons
  buttons_next: number[];  // next element
  buttons_prev: number[];  // previous element
  // keyboard
  keys_prev: string[];
  keys_next: string[];
  keys: string[];
}