// Configuration and axes/button mapping for a VirtualJoystick
export default interface JoystickInput {
  name: string;
  gamepad: number; //-1 means we accept all gamepads, -2 means none
  axes_x: number;
  axes_y: number;
  key_x_pos: string; // KEY_UP?
  key_x_neg: string; // KEY_DOWN?
  key_y_pos: string;
  key_y_neg: string;
  deadzoneX: number;
  deadzoneY: number;
  // TODO: deadzones?
  // specialy for gamepads
  invert_x: boolean;
  invert_y: boolean;
}