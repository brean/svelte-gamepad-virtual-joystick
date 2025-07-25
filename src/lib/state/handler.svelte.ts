import GamepadInputHandler from "$lib/input_handling/GamepadInputHandler.js";
import KeyboardInputHandler from "$lib/input_handling/KeyboardInputHandler.js";

// all input handler
export const handler = $state<{
  keyboard: {[context: string]: KeyboardInputHandler[]};
  gamepad: {[context: string]: GamepadInputHandler[]};
}>({
  keyboard: {},
  gamepad: {}
});

export const registerComponent = (
    context: string[], 
    kbd: KeyboardInputHandler, 
    gp: GamepadInputHandler) => {
  context.forEach((ctx) => {
    if (!handler.keyboard[ctx]) {
      handler.keyboard[ctx] = [];
    }
    handler.keyboard[ctx].push(kbd);

    if (!handler.gamepad[ctx]) {
      handler.gamepad[ctx] = [];
    }
    handler.gamepad[ctx].push(gp)
  });
};

export const unregisterComponent = (
    context: string[], 
    kbd: KeyboardInputHandler, 
    gp: GamepadInputHandler) => {
  context.forEach((ctx) => {
    if (handler.keyboard[ctx]) {
      handler.keyboard[ctx].splice(handler.keyboard[ctx].indexOf(kbd), 1);
    }
    if (handler.gamepad[ctx]) {
      handler.gamepad[ctx].splice(handler.gamepad[ctx].indexOf(gp), 1);
    }
  });
}

