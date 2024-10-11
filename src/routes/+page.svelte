<script lang="ts">
  import GamepadManager from "$lib/components/GamepadManager.svelte";
  import VirtualJoystick from "$lib/components/VirtualJoystick.svelte";
  import { gamepad } from "$lib/store/gamepad.js";
  
  let position_first: [x: number, y: number] = [0, 0];
  let position_second: [x: number, y: number] = [0, 0];

  function requestFullScreen() {
    document.getElementById("main").requestFullscreen()
  }
</script>
Connected gamepads: {$gamepad.length}

<!-- GamepadManager should be unique in your page. -->

<GamepadManager />

<VirtualJoystick
  background="black"
  size={120}
  xaxes={0}
  yaxes={1}
  bind:position={position_first}
/><br />
x: {position_first[0]} y: {position_first[1]}
<br />

<VirtualJoystick
  color={"red"}
  xaxes={2}
  yaxes={3}
  bind:position={position_second}
/><br />
x: {position_second[0]} y: {position_second[1]}

<button on:click={requestFullScreen}>Fullscreen</button>