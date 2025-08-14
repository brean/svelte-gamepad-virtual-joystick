<script lang="ts">
  import DPad from "$lib/components/DPad.svelte";
  import MainNav from "../../demo/MainNav.svelte";

  let position: [x: number, y: number] = $state([0, 0]);
</script>

<MainNav />
<br />
<DPad bind:position />
<div >
x: {position[0].toFixed(3)}<br />
y: {position[1].toFixed(3)}
</div>