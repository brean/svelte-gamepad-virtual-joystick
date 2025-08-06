<script lang="ts">
  import { onMount } from "svelte";
  import { thisGamepad } from "$lib/utils.js";
  import { addActiveComponent, component_state } from "$lib/state/components.svelte.js";
  interface INavigator {
    getGamepads: () => Gamepad[];
  }

  interface Props {
    updateUsingAnimationFrame?: boolean,
    updateUsingInterval?: boolean,
    timeout?: number
  }
  // if you use another external animation frame update function
  // you can call .updateGamepadValues directly.
  let {
    updateUsingAnimationFrame = false,
    updateUsingInterval = true,
    timeout = 1000.0 / 25.0,  // 25 fps = 40 ms.
  }: Props = $props();

  const changeContext = (newContext: string) => {
    component_state.activeComponents.forEach((inp) => {
      if (inp.focusElement) {
        inp.focusElement.blur();
      }
    })
    component_state.activeComponents = [];
    const components = component_state.components[newContext];
    components.forEach((component) => {
      if (!component.requiresFocus || component.focusElement === document.activeElement) {
        addActiveComponent(component);
      } 
    })
    component_state.context = newContext;
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
    let components = component_state.activeComponents;
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
    let components = component_state.activeComponents;
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
    let components = component_state.activeComponents;
    keyDown[key] = true;
    components.forEach((comp) => {
      comp.onkeyhold(event);
    })
  }

  const release = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    delete keyDown[key];
    let components = component_state.activeComponents;
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