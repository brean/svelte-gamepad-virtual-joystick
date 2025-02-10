// Configuration and axes/button mapping for a VirtualButton
export default interface Input {
    name: string;
    gamepad: number; //-1 means we accept all gamepads, -2 or lower means none
  }