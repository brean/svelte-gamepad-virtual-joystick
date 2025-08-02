import type Input from "$lib/models/Input.js";
import { thisGamepad } from "$lib/utils.js";

export default class InputComponent {
  focusElement?: HTMLElement;
  requiresFocus: boolean;
  input: Input;
  disabled: boolean = false;
  onpressedCallback?: () => void;
  onholdCallback?: () => void;
  onreleaseCallback?: () => void;
  consumePress: boolean;

  constructor(
      input: Input,
      focusElement?: HTMLElement,
      requiresFocus: boolean = false,
      onpressed?: () => void,
      onhold?: () => void,
      onrelease?: () => void,
      consumePress: boolean = false) {
    this.onpressedCallback = onpressed;
    this.onholdCallback = onhold;
    this.onreleaseCallback = onrelease;
    this.focusElement = focusElement;
    this.input = input;
    this.requiresFocus = requiresFocus;
    this.consumePress = consumePress;
  }

  onpressed(): boolean {
    if (this.disabled) {
      // forward to next button.
      return false;
    }
    if (this.onpressedCallback) {
      this.onpressedCallback();
    }
    // We normally don't consume this pressed event, 
    // so other components can react to the same press at the same time.
    return this.consumePress;
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
  thisKey(event: KeyboardEvent): boolean {
    return false;
  }

  // key pressed (down)
  onkeypressed(event: KeyboardEvent): boolean {
    return this.thisKey(event) && this.onpressed();
  }

  // key released (up)
  onkeyrelease(event: KeyboardEvent) {
    if (this.thisKey(event)) {
      this.onrelease();
    }
  }

  // key hold down
  onkeyhold(event: KeyboardEvent) {
    if (this.thisKey(event)) {
      this.onhold();
    }
  }
}