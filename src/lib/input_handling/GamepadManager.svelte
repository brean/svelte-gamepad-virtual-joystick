<script lang="ts">
  import { onMount } from "svelte";
    import type GamepadInputHandler from "./GamepadInputHandler.js";
    import { thisGamepad } from "$lib/utils.js";
    import { handler } from "$lib/state/handler.svelte.js";
  interface INavigator {
    getGamepads: () => Gamepad[];
  }

  interface Props {
    updateUsingAnimationFrame?: boolean,
    updateUsingInterval?: boolean,
    timeout?: number
    context?: string
  }
  // if you use another external animation frame update function
  // you can call .updateGamepadValues directly.
  let {
    updateUsingAnimationFrame = false,
    updateUsingInterval = true,
    timeout = 1000.0 / 25.0,  // 25 fps = 40 ms.
    context = 'default'  // 
  }: Props = $props();
  // save button states to handle pressed/hold events.
  let buttonDown: {[button: string]: boolean} = {};
  let navigator: INavigator;

  function gamePadConnected(evt: any) {
    navigator = evt.target.navigator;
  }

  export function updateGamepadValues() {
    let inputHandler: GamepadInputHandler[] = handler.gamepad[context];
    // get all values from gamepad
    if (!navigator) {
      return;
    }
    // Chrome only updates the gamepad state when we call getGamepads
    for (let pad of navigator.getGamepads()) {
      if (!pad) {
        continue;
      }
      for (let i = 0; i < pad.buttons.length; i++) {
        if (pad.buttons[i].pressed) {
          inputHandler.forEach(handler => {
            if (handler.thisGamepadButton(pad, i)) {
              handler.onbuttonhold(pad, i);
            }
          });
          if (!buttonDown[i]) {
            buttonDown[i] = true;

            for (let handler of inputHandler) {
              if (handler.thisGamepadButton(pad, i) && handler.onbuttonpressed(pad, i) === true) {
                break;
              }
            };
          }
        }
        if (buttonDown[i] && !pad.buttons[i].pressed) {
          buttonDown[i] = false;
          // onbuttonrelease.forEach((func) => func(pad, i));
          inputHandler.forEach((handler) => {
            if (handler.thisGamepadButton(pad, i)) {
              handler.onbuttonrelease(pad, i)
            }
         });
        }
      }
      inputHandler.forEach((handler) => {
        if (thisGamepad(handler.input, pad)) {
          handler.onupdate(pad)
        }
      });
    }
  }

  function updateAnimationFrame() {
    updateGamepadValues();
    requestAnimationFrame(updateAnimationFrame);
  }

  onMount(() => {
    if (updateUsingAnimationFrame) {
      updateAnimationFrame();
    }
    else if (updateUsingInterval) {
      setInterval(updateGamepadValues, timeout)
    }
  })
</script>

<svelte:window
  ongamepadconnected={gamePadConnected}
/>