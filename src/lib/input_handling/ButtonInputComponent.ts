import type ButtonInput from "$lib/models/ButtonInput.js";
import InputComponent from "./InputComponent.js";

export default class ButtonInputComponent extends InputComponent {

  // Gamepad
  thisGamepadButton(
      gamepad: Gamepad,
      btn: number): boolean {
    return super.thisGamepadButton(gamepad, btn) && 
      (this.input as ButtonInput).buttons.includes(btn)
  }

  // Keyboard
  thisKey(event: KeyboardEvent): boolean {
    return (this.input as ButtonInput).keys.includes(
      event.key.toLowerCase()) || false;
  }
}
