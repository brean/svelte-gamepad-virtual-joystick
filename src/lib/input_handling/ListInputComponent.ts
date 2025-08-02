import type { Input } from "$lib/index.js";
import type ListInput from "$lib/models/ListInput.js";
import { thisGamepad } from "$lib/utils.js";
import InputComponent from "./InputComponent.js";

export default class ListInputComponent extends InputComponent {
  axesDown = -1;
  changeFocus: (direction: 1 | -1) => void;

  constructor(
      input: Input,
      changeFocus: (direction: 1 | -1) => void,
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
    this.changeFocus = changeFocus;
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
    }
    if (inputMapping.buttons_prev.includes(btn)) {
      this.changeFocus(-1);
    }
    // we only consume the pressed-button, not the prev/next buttons
    return false;
  }

  // --- Keyboard ---
  onkeypressed(event: KeyboardEvent): boolean {
    if (this.disabled) {
      return false;
    }
    const inputMapping = this.input as ListInput;
    const key = event.key.toLowerCase()
    if (inputMapping.keys.includes(key)) {
      return this.onpressed();
    }
    if (inputMapping.keys_next.includes(key)) {
      this.changeFocus(1);
    }
    if (inputMapping.keys_prev.includes(key)) {
      this.changeFocus(-1);
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