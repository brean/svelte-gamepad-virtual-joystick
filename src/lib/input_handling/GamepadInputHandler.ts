export default class GamepadInputHandler {
  active: boolean = true;  // only when its focussed and not disabled

  // button pressed (down)
  onbuttonpressed(gamepad: Gamepad, btn: number) {
  }

  // button released (up)
  onbuttonrelease(gamepad: Gamepad, btn: number) {
  }

  // button hold down
  onbuttonhold(gamepad: Gamepad, btn: number) {
  }

  onupdate(gamepad: Gamepad) {
  }
}