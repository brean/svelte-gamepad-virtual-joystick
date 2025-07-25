import type Input from "$lib/models/Input.js";

export default class KeyboardInputHandler {
  focussed: boolean = true;
  input: Input;

  constructor(input: Input) {
    this.input = input;
  }

  thisKey(event: KeyboardEvent): boolean {
    return false;
  }

  // key pressed (down)
  onkeypressed(event: KeyboardEvent): boolean {
    return false;
  }

  // key released (up)
  onkeyrelease(event: KeyboardEvent) {
  }

  // key hold down
  onkeyhold(event: KeyboardEvent) {
  }
}