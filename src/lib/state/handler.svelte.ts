import type GamepadInputHandler from "$lib/input_handling/GamepadInputHandler.js";
import KeyboardInputHandler from "$lib/input_handling/KeyboardInputHandler.js";

// all input handler
export const handler = $state<{
  keyboard: {[context: string]: KeyboardInputHandler[]};
  gamepad: {[context: string]: GamepadInputHandler[]};
}>({
  keyboard: {},
  gamepad: {}
});