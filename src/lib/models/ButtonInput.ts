import type Input from "./Input.js";

// Configuration and axes/button mapping for a VirtualButton
export default interface ButtonInput extends Input {
  // Gamepad Buttons (index of the button)
  buttons: number[];
  // Keyboard keys (character on the keyboard)
  keys: string[];
}