import type Input from "./Input.js";

// Configuration and axes/button mapping for a VirtualJoystick
export default interface JoystickInput extends Input {
  // gamepad
  axes_x: number;
  axes_y: number;
  deadzoneX: number;
  deadzoneY: number;
  invert_x: boolean;
  invert_y: boolean;

  // keyboard
  key_x_pos: string; // KEY_UP?
  key_x_neg: string; // KEY_DOWN?
  key_y_pos: string;
  key_y_neg: string;
}