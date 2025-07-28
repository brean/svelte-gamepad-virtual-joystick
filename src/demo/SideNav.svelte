<script lang="ts">
  import List from "$lib/components/List.svelte";

  const listItems = [
    'Main',
    'Second',
    'Third',
    'Settings',
    'Fifth',
  ];
  let navOpen = $state<boolean>(false);
  let sideNavWidth = $state<string>('0');
  let selectedIndex = $state(0);

  function toggleNav() {
    if (navOpen) {
      hideNav();
    } else {
      showNav();
    }
  }

  function hideNav() {
    sideNavWidth = '0';
    navOpen = false;
  }

  function showNav() {
    sideNavWidth = '250px';
    navOpen = true;
  }

  function listItemPressed() {
    const item = listItems[selectedIndex];
    if (item === 'Settings') {
      // TODO: show config dialog in main menu
    }
    hideNav();
  }
</script>

<div id="sidenav" class="sidenav" style:width={sideNavWidth}>
  <button class="closebtn" onclick={toggleNav}>&times;</button>
  <List
    disabled={!navOpen}
    onpressed={listItemPressed}
    bind:selectedIndex
    items={listItems}
    wrap={false}>
  </List>
</div>