import type ListInput from "$lib/models/ListInput.js";
import { thisGamepad } from "$lib/utils.js";
import InputComponent from "./InputComponent.js";

export default class ListInputComponent extends InputComponent {
  axesDown = -1;

  changeFocus = (direction: 1 | -1) => {};

  onpressed(): boolean {
    if (this.disabled) {
      return false;
    }
    // execute callback
    return super.onpressed();
  }

  // --- Gamepad ---
  onbuttonpressed(gamepad: Gamepad, btn: number): boolean {
    if (this.disabled || !thisGamepad(this.input, gamepad)) {
      return false;
    }
    const inputMapping = this.input as ListInput;
    if (inputMapping.buttons.includes(btn)) {
      return this.onpressed();
    }
    if (inputMapping.buttons_next.includes(btn)) {
      this.changeFocus(1);
      return true;
    }
    if (inputMapping.buttons_prev.includes(btn)) {
      this.changeFocus(-1);
      return true;
    }
    return false;
  }

  // --- Keyboard ---
  onkeypressed(event?: KeyboardEvent): boolean {
    if (!event) {
      return false;
    }
    const inputMapping = this.input as ListInput;
    const key = event.key.toLowerCase()
    if (inputMapping.keys.includes(key)) {
      return this.onpressed();
    }
    if (inputMapping.keys_next.includes(key)) {
      this.changeFocus(1);
      return true;
    }
    if (inputMapping.keys_prev.includes(key)) {
      this.changeFocus(-1);
      return true;
    }
    return false;
  }

  onupdate(gamepad: Gamepad): void {
    if (this.disabled || !thisGamepad(this.input, gamepad)) {
      return
    }
    const inputMapping = this.input as ListInput;
    for (const axesIdx of inputMapping.axes) {
      const value = gamepad.axes[axesIdx];
      let sensitivity = inputMapping.sensitivity;
      if (value < -sensitivity && this.axesDown != axesIdx) {
        this.changeFocus(-1);
        this.axesDown = axesIdx;
        continue;
      }
      if (value > sensitivity && this.axesDown != axesIdx) {
        this.changeFocus(1);
        this.axesDown = axesIdx;
        continue;
      }
      if (value < sensitivity && value > -sensitivity) {
        this.axesDown = -1;
      }
    }
  }
}