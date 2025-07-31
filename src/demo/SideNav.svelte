<script lang="ts">
  import List from "$lib/components/List.svelte";

  const listItems = [
    'Main',
    'Second',
    'Third',
    'Settings',
    'Fifth',
  ];

  interface Props {
    open: boolean
  }
  let {
    open = $bindable(false)
  }: Props = $props();

  let selectedIndex = $state(0);

  function listItemPressed(): boolean {
    const item = listItems[selectedIndex];
    if (item === 'Settings') {
      // TODO: show config dialog in main menu
    }
    open = false;
    return true;  // we consumed this event, stop propagation
  }
</script>

<div id="sidenav" class="sidenav" style:width={open ? '250px' : '0'}>
  <button class="closebtn" onclick={() => {open = false;}}>&times;</button>
  <List
    disabled={!open}
    onpressed={listItemPressed}
    bind:selectedIndex
    items={listItems}
    wrap={false}>
  </List>
</div>