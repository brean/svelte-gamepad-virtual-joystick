<script lang="ts">
  import { gamepad_listener } from "$lib/store/gamepad_listener.js";
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

  let navigator: any;

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
      for (let listener of $gamepad_listener) {
        listener(pad);
      }
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