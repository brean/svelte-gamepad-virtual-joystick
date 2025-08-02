import type { Input } from "$lib/index.js";
import type SliderInput from "$lib/models/SliderInput.js";
import { thisGamepad } from "$lib/utils.js";
import InputComponent from "./InputComponent.js";


export default class SliderInputComponent extends InputComponent {
  setValue: (value: number) => void;
  getValue: () => number;
  min: number;
  max: number;
  step: number;

  constructor(
      input: Input,
      setValue: (value: number) => void,
      getValue: () => number,
      min: number,
      max: number,
      step: number,
      focusElement?: HTMLElement,
      requiresFocus: boolean = false,
      onpressed?: () => void,
      onhold?: () => void,
      onrelease?: () => void,
      consumePress: boolean = false) {
    super(
      input, focusElement, requiresFocus,
      onpressed, onhold, onrelease,
      consumePress);
    this.setValue = setValue;
    this.getValue = getValue;
    this.min = min;
    this.max = max;
    this.step = step;
  }



  // --- Gamepad ---
  onbuttonpressed(gamepad: Gamepad, btn: number) {
    if (this.disabled || !thisGamepad(this.input, gamepad)) {
      return false;
    }
    const inputMapping = this.input as SliderInput;
    if (inputMapping.buttons.includes(btn)) {
      return super.onbuttonpressed(gamepad, btn);
    }
    if (inputMapping.buttons_pos.includes(btn)) {
      this.setValue(Math.min(this.max, this.getValue()+this.step));
    }
    if (inputMapping.buttons_neg.includes(btn)) {
      this.setValue(Math.max(this.min, this.getValue()-this.step));
    }
    // we do not consume this button press
    return false;
  }

  // --- Keyboard ---
  thisKey(event: KeyboardEvent): boolean {
    return (this.input as SliderInput).keys.includes(
      event.key.toLowerCase()) || false;
  }

  onkeyhold(event: KeyboardEvent): void {
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