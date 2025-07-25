import type Input from "$lib/models/Input.js";
import { thisGamepad } from "$lib/utils.js";

export default class GamepadInputHandler {
  focussed: boolean = true;
  input: Input;

  constructor(input: Input) {
    this.input = input;
  }

  thisGamepadButton(gamepad: Gamepad, btn: number): boolean {
    return thisGamepad(this.input, gamepad);
  }

  // button pressed (down)
  onbuttonpressed(gamepad: Gamepad, btn: number): boolean {
    return false;
  }

  // button released (up)
  onbuttonrelease(gamepad: Gamepad, btn: number): void {
  }

  // button hold down
  onbuttonhold(gamepad: Gamepad, btn: number): void {
  }

  onupdate(gamepad: Gamepad): void {
  }
}