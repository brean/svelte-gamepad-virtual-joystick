import type JoystickInput from "$lib/models/JoystickInput.js";
import { thisGamepad } from "$lib/utils.js";
import InputComponent from "./InputComponent.js";

export default class JoystickInputComponent extends InputComponent {
  xPos = false;
  xNeg = false;
  yPos = false;
  yNeg = false;

  gamepadActive: boolean = false;
  pos:[x: number, y: number] = [0, 0];
  radius: number = 50;
  calcPos = (x: number, y: number) => {};
  updatePosition = (active: boolean, pos: [x: number, y: number]) => {};

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

    // Proceed with calculations now that we know a valid key was pressed.
    this.calcPos(x * this.radius, y * this.radius);
    this.pos = [x, y];
    this.gamepadActive = false;
  }

  // keyboard
  updateKeys(event: KeyboardEvent) {
    const inputMapping = this.input as JoystickInput;
    const key = event.key.toLowerCase()
    this.xPos = inputMapping.key_x_pos.includes(key);
    this.xNeg = inputMapping.key_x_neg.includes(key);
    this.yPos = inputMapping.key_y_pos.includes(key);
    this.yNeg = inputMapping.key_y_neg.includes(key);
  }

  onkeyrelease(event?: KeyboardEvent): void {
    if (this.disabled || !event) {
      return
    }
    this.updateKeys(event)
    super.onkeyrelease(event);
  }

  onkeyhold(event?: KeyboardEvent): void {
    if (this.disabled || !event) {
      return
    }
    this.updateKeys(event)
    super.onkeyhold(event);
  }

  // gamepad
  updateButton(idx: number) {
    const inputMapping = this.input as JoystickInput;
    this.xPos = inputMapping.button_x_pos.includes(idx);
    this.xNeg = inputMapping.button_x_neg.includes(idx);
    this.yPos = inputMapping.button_y_pos.includes(idx);
    this.yNeg = inputMapping.button_y_neg.includes(idx);
  }

  onbuttonhold(gamepad: Gamepad, btn: number): void {
    if (this.disabled) {
      return
    }
    this.updateButton(btn)
    super.onbuttonhold(gamepad, btn);
  }

  onbuttonrelease(gamepad: Gamepad, btn: number): void {
    if (this.disabled) {
      return
    }
    this.updateButton(btn)
    super.onbuttonrelease(gamepad, btn);
  }

  onupdate(gamepad: Gamepad): void {
    if (this.disabled || !this.gamepadActive || !thisGamepad(this.input, gamepad)) {
      return
    }
    const inputMapping = this.input as JoystickInput;
    let xcoord = gamepad.axes[inputMapping.axes_x];
    let ycoord = gamepad.axes[inputMapping.axes_y];
    if (inputMapping.invert_x) {
      xcoord = -xcoord;
    }
    if (inputMapping.invert_y) {
      ycoord = -ycoord;
    }
    if (Math.abs(xcoord) < inputMapping.deadzoneX && 
        Math.abs(ycoord) < inputMapping.deadzoneY) {
      this.updatePosition(false, [0, 0]);
      return;
    }
    this.updatePosition(true, [xcoord, ycoord]);
  }

  activateGamepad = () => {
    if (this.disabled) {
        return
      }
      this.gamepadActive = true;
  }
}