<script lang="ts">
  import MainNav from "../../demo/MainNav.svelte";
  
  import List from "$lib/components/List.svelte";
    import { onMount } from "svelte";

  const items = ['banana', 'orange', 'apple', 'strawberry'];
  let selectedItemIndex = $state(0);
  let lst: List;

  onMount(() => {
    lst.getElement().focus();
    lst.focusItemAtIndex(0);
  })
</script>

<MainNav />

<List items={items} bind:selectedIndex={selectedItemIndex} bind:this={lst} />

Selected: {items[selectedItemIndex]}