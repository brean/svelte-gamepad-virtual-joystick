import type Input from "$lib/models/Input.js";
import { thisGamepad } from "$lib/utils.js";

export default class InputComponent {
  focusElement?: HTMLElement;
  requiresFocus: boolean;
  input: Input;
  disabled: boolean = false;
  onpressedCallback: (() => boolean) | undefined;
  onholdCallback: (() => void) | undefined;
  onreleaseCallback: (() => void) | undefined;

  constructor(
      input: Input,
      focusElement?: HTMLElement,
      requiresFocus: boolean = false,
      onpressed: (() => boolean) | undefined = undefined,
      onhold: (() => void) | undefined = undefined,
      onrelease: (() => void) | undefined = undefined) {
    this.onpressedCallback = onpressed;
    this.onholdCallback = onhold;
    this.onreleaseCallback = onrelease;
    this.focusElement = focusElement;
    this.input = input;
    console.log(focusElement);
    this.requiresFocus = requiresFocus;
  }

  onpressed(): boolean {
    if (this.onpressedCallback) {
      return this.onpressedCallback();
    }
    return false
  }

  onhold() {
    if (this.onholdCallback) {
      this.onholdCallback();
    }
  }

  onrelease() {
    if (this.onreleaseCallback) {
      this.onreleaseCallback();
    }
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
  thisKey(event?: KeyboardEvent): boolean {
    return false;
  }

  // key pressed (down)
  onkeypressed(event?: KeyboardEvent): boolean {
    return this.onpressed();
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