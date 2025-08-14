<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { GamepadButtons } from "$lib/index.js";
  import InputManager from "$lib/input_handling/InputManager.svelte";
  import SideNav from "./SideNav.svelte";
  import VirtualButtons from "./VirtualButtons.svelte";

  interface Props {
    open?: boolean
    showInfo?: boolean
    mgr?: InputManager
  }
  let {
    open = $bindable(false),
    showInfo = $bindable(false),
    mgr = $bindable()
  }: Props = $props();

  let sideNav: SideNav
</script>

<!-- The InputManager should be unique in your page. -->
<InputManager bind:this={mgr} />

<VirtualButtons {showInfo} />

<SideNav bind:open bind:this={sideNav} {mgr} />

<Button
  onpressed={() => {
    open = true;
    sideNav.getListElement().focus();
    mgr?.changeContext('nav')
  }}
  inputMapping={{
    name: 'side nav',
    gamepad: -1,
    buttons: [GamepadButtons.UP],
    keys: ['t'],
  }}
>
  side nav
</Button>