// Configuration and axes/button mapping for a VirtualButton
export default class VirtualButtonInput {
    gamepad_buttons: number[] = [0]
    keyboard_keys: string[] = ['q'];
    // allowed input methods
    gamepad: boolean = true;
    keyboard: boolean = true;
    touch: boolean = true;
    mouse: boolean = true;
}