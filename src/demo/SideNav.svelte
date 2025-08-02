<script lang="ts">
  import Button from "$lib/components/Button.svelte";
import List from "$lib/components/List.svelte";
  import { GamepadButtons } from "$lib/index.js";

  const listItems = [
    'Main',
    'Second',
    'Third',
    'Settings',
    'Fifth',
  ];

  let lstElement: List;

  export function getListElement(): HTMLElement {
    return lstElement.getElement();
  }

  interface Props {
    open: boolean
  }
  let {
    open = $bindable(false)
  }: Props = $props();

  let selectedIndex = $state(0);

  function listItemPressed(): void {
    const item = listItems[selectedIndex];
    if (item === 'Settings') {
      // TODO: show config dialog in main menu
    }
    open = false;
  }
</script>

<div
    id="sidenav"
    class="sidenav"
    style:width={open ? '250px' : '0'}
    >
  <Button
    cssclassWrapper="closebtn"
    onpressed={() => {open = false;}}
      inputMapping={{
      name: 'close side nav',
      gamepad: -1,
      buttons: [GamepadButtons.LEFT],
      keys: ['x'],
    }}
    >
    &times;
  </Button>
  <List
    bind:this={lstElement}
    disabled={!open}
    onpressed={listItemPressed}
    bind:selectedIndex
    items={listItems}
    wrap={true}>
  </List>
</div>