<script lang="ts">
  import Joystick from "$lib/components/Joystick.svelte";
  import MainNav from "../../demo/MainNav.svelte";

  let positionFirst: [x: number, y: number] = $state([0, 0]);
</script>

<MainNav />

<Joystick bind:position={positionFirst} /><br />
x: {positionFirst[0].toFixed(3)}<br />
y: {positionFirst[1].toFixed(3)}