import { DPadInputComponent, type Input } from "$lib/index.js";
import type JoystickInput from "$lib/models/JoystickInput.js";
import { thisGamepad } from "$lib/utils.js";

export default class JoystickInputComponent extends DPadInputComponent {
  radius: number;
  calcPos: (x: number, y: number) => void;

  constructor(
      input: JoystickInput,
      radius: number,
      calcPos: (x: number, y: number) => void,
      updatePosition: (active: boolean, pos: [x: number, y: number]) => void,
      focusElement?: HTMLElement,
      requiresFocus: boolean = false
    ) {
    super(input, updatePosition, focusElement, requiresFocus);
    this.radius = radius;
    this.calcPos = calcPos;
  }

  onrelease(): void {
    let x = this.pos[0];
    let y = this.pos[1];
    if (this.xPos || this.xNeg) {
      x = 0;
    }

    if (this.yPos || this.yNeg) {
      y = 0;
    }

    if (x == this.pos[0] && y == this.pos[1]) {
      return
    }

    // Proceed with calculations now that we know a valid key was pressed.
    this.calcPos(x * this.radius, y * this.radius);
    this.pos = [x, y];
    this.gamepadActive = true;
  }

  onhold(): void {
    let x = this.pos[0];
    let y = this.pos[1];
    if (this.xPos) {
      x = 1;
    } else if (this.xNeg) {
      x = -1;
    }

    if (this.yPos) {
      y = 1;
    } else if (this.yNeg) {
      y = -1;
    }

    if (x == this.pos[0] && y == this.pos[1]) {
      return
    }

    this.pos = [x, y];
    // Proceed with calculations now that we know a valid key was pressed.
    this.calcPos(x * this.radius, y * this.radius);
    this.gamepadActive = false;
  }
}