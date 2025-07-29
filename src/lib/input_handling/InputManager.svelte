<script lang="ts">
  import { onMount } from "svelte";
    import type InputComponent from "./InputComponent.js";
    import { thisGamepad } from "$lib/utils.js";
    import { component_store } from "$lib/state/components.svelte.js";
  interface INavigator {
    getGamepads: () => Gamepad[];
  }

  interface Props {
    focusIndex?: number
    context?: string
    updateUsingAnimationFrame?: boolean,
    updateUsingInterval?: boolean,
    timeout?: number
  }
  // if you use another external animation frame update function
  // you can call .updateGamepadValues directly.
  let {
    focusIndex = 0,
    context: initialContext = 'default',
    updateUsingAnimationFrame = false,
    updateUsingInterval = true,
    timeout = 1000.0 / 25.0,  // 25 fps = 40 ms.
  }: Props = $props();
  let context = $state(initialContext);

  const changeContext = (newContext: string) => {
    context = newContext;
  }

  const getComponentsByContext = (): InputComponent[] => {
    return component_store.components[context];
  }

  let buttonDown: {[button: string]: boolean} = {};
  let keyDown: {[code: string]: boolean} = {};

  // --- GamePad ---
  // save button states to handle pressed/hold events.
  let navigator: INavigator;
  const gamePadConnected = (evt: any) => {
    navigator = evt.target.navigator;
  }

  const updateGamepadValues = () => {
    let components = getComponentsByContext();
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
          components.forEach(comp => {
            if (comp.thisGamepadButton(pad, i)) {
              comp.onbuttonhold(pad, i);
            }
          });
          if (!buttonDown[i]) {
            buttonDown[i] = true;

            for (let comp of components) {
              if (comp.thisGamepadButton(pad, i) && comp.onbuttonpressed(pad, i) === true) {
                break;
              }
            };
          }
        }
        if (buttonDown[i] && !pad.buttons[i].pressed) {
          buttonDown[i] = false;
          // onbuttonrelease.forEach((func) => func(pad, i));
          components.forEach((comp) => {
            if (comp.thisGamepadButton(pad, i)) {
              comp.onbuttonrelease(pad, i)
            }
         });
        }
      }
      components.forEach((handler) => {
        if (thisGamepad(handler.input, pad)) {
          handler.onupdate(pad)
        }
      });
    }
  }

  const updateAnimationFrame = () => {
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
  });

  // --- Keyboard ---
  // press once (behaves different then "press" in Firefox which is called all the time while the button is pressed)
  const keypress = (event: KeyboardEvent) => {
    let components = getComponentsByContext();
    for (let comp of components) {
      if (comp.onkeypressed(event) === true) {
        break;
      }
    };
  }

  // press and hold the key (repeats while the button is pressed)
  const keydown = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    if (!keyDown[key]) {
      keypress(event);
    }
    let components = getComponentsByContext();
    keyDown[key] = true;
    components.forEach((comp) => {
      comp.onkeyhold(event);
    })
  }

  const release = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    delete keyDown[key];
    let components = getComponentsByContext();
    components.forEach((comp) => {
      comp.onkeyrelease(event);
    })
  }

  export { changeContext };
</script>

<svelte:window
  ongamepadconnected={gamePadConnected}
  onkeydown={keydown}
  onkeyup={release}
/>