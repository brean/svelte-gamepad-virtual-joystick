<script lang="ts">
  import Gamepad from "$lib/components/Gamepad.svelte";
  import { gamepad } from "$lib/store/gamepad.js";
  
</script>
Connected gamepads: {$gamepad.length}

<Gamepad />
