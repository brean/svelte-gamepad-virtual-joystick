<script lang="ts">
  // TODO: GamepadInputHandler class that has a 
  //  focussed-flag that gets set when the element is in focus
  import { onbuttonpressed, onbuttonrelease, onbuttonhold, onupdate } from '$lib/state/gamepad_callbacks.svelte.js'
  import { onMount } from "svelte";

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
    timeout = 1000.0 / 25.0  // 25 fps = 40 ms.
  }: Props = $props();

  let buttons: {[button: string]: boolean} = {};

  interface INavigator {
    getGamepads: () => Gamepad[];
  }

  let navigator: INavigator;

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
          onbuttonhold.forEach((func) => func(pad, i));
          if (!buttons[i]) {
            buttons[i] = true;
            for (let cb of onbuttonpressed) {
              if (cb(pad, i) === true) {
                break;
              }
            };
          }
        }
        if (buttons[i] && !pad.buttons[i].pressed) {
          buttons[i] = false;
          onbuttonrelease.forEach((func) => func(pad, i));
        }
      }
      onupdate.forEach((func) => func(pad));
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