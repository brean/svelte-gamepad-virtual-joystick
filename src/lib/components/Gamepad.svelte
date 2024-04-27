<script lang="ts">
  let navigator;

  function gamePadConnected(evt) {
    console.log(evt);
    navigator = evt.target.navigator;
    // Chrome only updates the gamepad state when we call getGamepads
    console.log(navigator.getGamepads()[evt.gamepad.index].buttons[0])
  }

  function gamePadDisconnected(evt) {
    console.log(evt)
  }

  // TODO: update on requestAnimationFrame or interval
  // TODO: gamepaddisconnected
  // TODO: 
</script>

<svelte:window
  on:gamepadconnected={gamePadConnected}
  on:gamepaddisconnected(gamePadDisconnected)
/>