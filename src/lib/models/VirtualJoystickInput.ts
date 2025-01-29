// Configuration and axes/button mapping for a VirtualJoystick
export default interface VirtualJoystickInput {
    gamepad: number; //-1 means we accept all gamepads, -2 means none
    axes_x: number;
    axes_y: number;
    key_x: string; // KEY_UP?
    key_y: string; // KEY_DOWN?
    // TODO: deadzones?
    // allowed input methods
    keyboard: boolean;
    touch: boolean;
    mouse: boolean;
    // specialy for gamepads
    invert_x: boolean;
    invert_y: boolean;
}