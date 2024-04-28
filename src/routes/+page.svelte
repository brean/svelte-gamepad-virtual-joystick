<script lang="ts">
  import GamepadManager from "$lib/components/GamepadManager.svelte";
  import VirtualJoystick from "$lib/components/VirtualJoystick.svelte";
  import { gamepad } from "$lib/store/gamepad.js";
  
</script>
Connected gamepads: {$gamepad.length}

<!-- GamepadManager should be unique in your page. -->

<GamepadManager />

<VirtualJoystick
  background="black"
  size={120}
  xaxes={0}
  yaxes={1}
/>

<VirtualJoystick
  color={"red"}
  xaxes={2}
  yaxes={3}
/>