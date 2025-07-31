import type SliderInput from "$lib/models/SliderInput.js";
import { thisGamepad } from "$lib/utils.js";
import InputComponent from "./InputComponent.js";


export default class SliderInputComponent extends InputComponent {
  setValue = (value: number) => {};
  getValue = () => {return 0};

  max: number = 0;
  min: number = 0;
  step: number = 1;

  // --- Gamepad ---
  onbuttonhold(gamepad: Gamepad, btn: number) {
    if (this.disabled || !thisGamepad(this.input, gamepad)) {
      return;
    }
    const inputMapping = this.input as SliderInput;
    if (inputMapping.buttons_pos.includes(btn)) {
      this.setValue(Math.min(this.max, this.getValue()+this.step));
    }
    if (inputMapping.buttons_neg.includes(btn)) {
      this.setValue(Math.max(this.min, this.getValue()-this.step));
    }
  }

  // --- Keyboard ---
  onkeyhold(event?: KeyboardEvent): void {
    if (!event) {
      return;
    }
    const inputMapping = this.input as SliderInput;
    const key = event.key.toLowerCase()
    if (inputMapping.keys.includes(key)) {
      return this.onhold();
    }
    if (inputMapping.keys_pos.includes(key)) {
      this.setValue(Math.min(this.max, this.getValue()+this.step));
    }
    if (inputMapping.keys_neg.includes(key)) {
      this.setValue(Math.max(this.min, this.getValue()-this.step));
    }
  }
}