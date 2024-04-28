<script lang="ts">
  import { gamepad } from "$lib/store/gamepad.js";

  let navigator;

  function gamePadConnected(evt) {
    console.log(evt);
    navigator = evt.target.navigator;
    // Chrome only updates the gamepad state when we call getGamepads
    // console.log(navigator.getGamepads()[evt.gamepad.index].buttons[0])
    $gamepad = [...$gamepad, evt.gamepad];
  }

  function gamePadDisconnected(evt) {
    console.log(evt)
    gamepad.update(items => items.filter(item => item.id != evt.gamepad.id));
  }

  // TODO: update on requestAnimationFrame or interval
  // TODO: mapping
</script>

<svelte:window
  on:gamepadconnected={gamePadConnected}
  on:gamepaddisconnected={gamePadDisconnected}
/>