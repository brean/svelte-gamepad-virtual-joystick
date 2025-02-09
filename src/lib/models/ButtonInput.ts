// Configuration and axes/button mapping for a VirtualButton
export default interface ButtonInput {
  name: string;
  gamepad: number;
  gamepad_buttons: number[];
  keyboard_keys: string[];
}