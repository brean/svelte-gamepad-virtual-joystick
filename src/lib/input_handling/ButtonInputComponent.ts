import type ButtonInput from "$lib/models/ButtonInput.js";
import InputComponent from "./InputComponent.js";

export default class ButtonInputComponent extends InputComponent {
  pressed = false;

  // Gamepad
  thisGamepadButton(
      gamepad: Gamepad,
      btn: number): boolean {
    return super.thisGamepadButton(gamepad, btn) && 
      (this.input as ButtonInput).buttons.includes(btn)
  }

  onpressed(): boolean {
    if (this.disabled) {
      return false;
    }
    this.pressed = true;
    super.onpressed();
    return true;
  }

  onhold() {
    super.onhold();
  }

  onrelease() {
    this.pressed = false;
    super.onrelease();
  }

  // Keyboard
  thisKey(event?: KeyboardEvent): boolean {
    return event && (this.input as ButtonInput).keys.includes(
      event.key.toLowerCase()) || false;
  }

  onkeypressed(event?: KeyboardEvent): boolean {
    return this.thisKey(event) && super.onkeypressed(event);
  }

  onkeyrelease(event?: KeyboardEvent) {
    if (this.thisKey(event)) super.onkeyrelease(event);
  }

  onkeyhold(event?: KeyboardEvent) {
    if (this.thisKey(event)) super.onkeyhold(event);
  }

}
