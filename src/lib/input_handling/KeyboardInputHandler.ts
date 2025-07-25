export default class KeyboardInputHandler {
  focussed: boolean = true;

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