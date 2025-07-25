export default class GamepadInputHandler {
  focussed: boolean = true;

  // button pressed (down)
  onbuttonpressed(gamepad: Gamepad, btn: number): boolean {
    return false;
  }

  // button released (up)
  onbuttonrelease(gamepad: Gamepad, btn: number): void {
  }

  // button hold down
  onbuttonhold(gamepad: Gamepad, btn: number): void {
  }

  onupdate(gamepad: Gamepad): void {
  }
}