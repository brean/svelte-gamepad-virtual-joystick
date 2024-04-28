<script lang="ts">
  import GamepadControl from "$lib/components/GamepadControl.svelte";
  import VirtualJoystick from "$lib/components/VirtualJoystick.svelte";
  import { gamepad } from "$lib/store/gamepad.js";
  
</script>
Connected gamepads: {$gamepad.length}

<!-- GamepadControl should be unique in your page. -->
<GamepadControl />
<VirtualJoystick
  background="black"
  size={120}
  axis={-1}
/>

<VirtualJoystick
  color={"red"}
  axis={1}
/>