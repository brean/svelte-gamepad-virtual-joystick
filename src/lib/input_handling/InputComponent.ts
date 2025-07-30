import type Input from "$lib/models/Input.js";
import { thisGamepad } from "$lib/utils.js";

export default class InputComponent {
  requiresFocus: boolean;
  input: Input;

  constructor(input: Input, requiresFocus: boolean = false) {
    this.input = input;
    this.requiresFocus = requiresFocus;
  }

  onpressed(): boolean {
    return false
  }

  onhold() {
  }

  onrelease() {
  }

  // --- Gamepad ---
  thisGamepadButton(gamepad: Gamepad, btn: number): boolean {
    return thisGamepad(this.input, gamepad);
  }

  // button pressed (down)
  onbuttonpressed(gamepad: Gamepad, btn: number): boolean {
    return this.onpressed();
  }

  // button released (up)
  onbuttonrelease(gamepad: Gamepad, btn: number): void {
    this.onrelease();
  }

  // button hold down
  onbuttonhold(gamepad: Gamepad, btn: number): void {
    this.onhold();
  }

  onupdate(gamepad: Gamepad): void {
  }

  // --- Keyboard ---
  thisKey(event: KeyboardEvent): boolean {
    return false;
  }

  // key pressed (down)
  onkeypressed(event?: KeyboardEvent): boolean {
    return this.onpressed();;
  }

  // key released (up)
  onkeyrelease(event?: KeyboardEvent) {
    this.onrelease();
  }

  // key hold down
  onkeyhold(event?: KeyboardEvent) {
    this.onhold();
  }
}