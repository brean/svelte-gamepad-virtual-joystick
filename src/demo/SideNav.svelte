<script lang="ts">
  import { goto } from "$app/navigation";

  import Button from "$lib/components/Button.svelte";
  import List from "$lib/components/List.svelte";
  import { GamepadButtons } from "$lib/index.js";
  import InputManager from "$lib/input_handling/InputManager.svelte";

  interface Props {
    mgr?: InputManager
    open?: boolean
  }
  let {
    open = $bindable(false),
    mgr = $bindable()
  }: Props = $props();

  const listItems = [
    'Main', 'Joystick', 'D-Pad', 'List', 'Slider'
  ];
  const base_url = '/svelte-gamepad-virtual-joystick'
  const urls = {
    'Main': '/',
    'Joystick': '/joystick',
    'D-Pad': '/d-pad',
    'List': '/list',
    'Slider': '/slider'
  }

  let lstElement: List;

  export function getListElement(): HTMLElement {
    return lstElement.getElement();
  }


  let selectedIndex = $state(0);

  function listItemPressed(): void {
    const item = listItems[selectedIndex];
    const uri = `${base_url}${urls[item]}`;
    open = false;
    mgr?.changeContext('default');
    goto(uri);
  }
</script>

<div
    id="sidenav"
    class="sidenav"
    style:width={open ? '250px' : '0'}
    >
  <Button
    cssclassWrapper="closebtn"
    onpressed={() => {
      open = false;
      mgr?.changeContext('default');
    }}
      context={['nav']}
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
    context={['nav']}
    requiresFocus={false}
    bind:this={lstElement}
    disabled={!open}
    onpressed={listItemPressed}
    bind:selectedIndex
    items={listItems}
    wrap={true}>
  </List>
</div>