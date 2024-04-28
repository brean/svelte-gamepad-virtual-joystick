<script lang="ts">
  import { gamepad } from "$lib/store/gamepad.js";
  import { gamepad_listener } from "$lib/store/gamepad_listener.js";
  import { onMount } from "svelte";

  // if you use another external animation frame update function
  // you can call .updateGamepadValues directly.
  export let updateUsingAnimationFrame = false;
  export let updateUsingInterval = true;
  export let timeout = 1000.0 / 25.0; // 25 fps = 40 ms.

  let navigator: any;

  function gamePadConnected(evt: any) {
    console.log(evt);
    navigator = evt.target.navigator;
    // Chrome only updates the gamepad state when we call getGamepads
    // console.log(navigator.getGamepads()[evt.gamepad.index].buttons[0])
    $gamepad = [...$gamepad, evt.gamepad];
  }

  function gamePadDisconnected(evt: any) {
    console.log(evt)
    gamepad.update(items => items.filter(item => item.id != evt.gamepad.id));
  }

  export function updateGamepadValues() {
    // get all values from gamepad
    if (!navigator) {
      return;
    }
    for (let pad of navigator.getGamepads()) {
      for (let listener of $gamepad_listener) {
        listener(pad);
      }
    }
  }

  // TODO: touchpad-mapping

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
  on:gamepadconnected={gamePadConnected}
  on:gamepaddisconnected={gamePadDisconnected}
/>