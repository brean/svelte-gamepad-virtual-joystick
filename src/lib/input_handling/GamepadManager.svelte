<script lang="ts">
  import { onMount } from "svelte";
    import type GamepadInputHandler from "./GamepadInputHandler.js";
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

  // all gamepad input handler inside this list will receive
  // the update event.
  let inputHandler: GamepadInputHandler[] = [];

  function gamePadConnected(evt: any) {
    navigator = evt.target.navigator;
  }

  export function updateGamepadValues() {
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
            handler.onbuttonhold(pad, i)
          });
          if (!buttonDown[i]) {
            buttonDown[i] = true;

            for (let handler of inputHandler) {
              if (handler.onbuttonpressed(pad, i) === true) {
                break;
              }
            };
          }
        }
        if (buttonDown[i] && !pad.buttons[i].pressed) {
          buttonDown[i] = false;
          // onbuttonrelease.forEach((func) => func(pad, i));
          inputHandler.forEach((handler) => handler.onbuttonrelease(pad, i));
        }
      }
      inputHandler.forEach((handler) => handler.onupdate(pad));
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