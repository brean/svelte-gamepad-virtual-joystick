<script lang="ts">
  import Slider from "$lib/components/Slider.svelte";
    import { onMount } from "svelte";
  import MainNav from "../../demo/MainNav.svelte";

  let firstSlider: Slider;

  onMount(() => {
    firstSlider.getElement().focus();
  })
</script>

<MainNav />

<!-- The slider is only active when it has the focus. focus is always local inside a context -->
<!-- 
<p>This is a special area you can activate with the "X" button</p>
-->
<Slider bind:this={firstSlider} /><br />
<Slider /><br />
<Slider />