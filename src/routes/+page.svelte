<script lang="ts">
  import InputManager from "$lib/input_handling/InputManager.svelte";
  import Button from "$lib/components/Button.svelte";
  import Slider from "$lib/components/Slider.svelte";
  import Joystick from "$lib/components/Joystick.svelte";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import VirtualButton from "$lib/components/VirtualButton.svelte";
  import { component_store } from "$lib/state/components.svelte.js";
  import Icon from "$lib/components/Icon.svelte";
  import List from "$lib/components/List.svelte";
    import GamepadButtons from "$lib/constants/GamepadButtons.js";

  const items = ['banana', 'orange', 'apple', 'strawberry'];
  let selectedItemIndex = $state(0);
  let positionFirst: [x: number, y: number] = $state([0, 0]);
  let mgr: InputManager;
  let contextButtonDisabled = $state(true);

  let showInfo = $state(true);
  onMount(() => {
    setTimeout(() => {
      showInfo = false;
    }, 2000);
  });
</script>

<VirtualButton
  context={['default', 'my_ctx']}
  onpressed={() => {
    // show all hints
    component_store.showHints = !component_store.showHints;
    return true;
  }}
  inputMapping={{
    name: 'Help',
    gamepad: -1,
    buttons: [GamepadButtons.VIEW],
    keys: ['h']
  }}
></VirtualButton>

<div class="background">
<main>
  {#if showInfo}
  <div
    style:pointer-events="none"
    transition:fade={{ duration: 300 }}
    class="help-modal">
    <div class="help-content">
      <Icon type="keyboard_mouse" input="h" color="#FFFFFF"></Icon>
      or 
      <Icon type="ps4" input="8"  color="#FFFFFF"></Icon>
      toggle help.
    </div>
  </div>
  {/if}

<Button
  onrelease={() => {
    mgr.changeContext('my_ctx');
    contextButtonDisabled = false;
  }}
  inputMapping={{
    name: 'Main Button',
    gamepad: -1,
    buttons: [GamepadButtons.RIGHT],
    keys: ['e']
  }}
>
  switch to context for button2!
</Button>

<Button
  onrelease={() => {
    mgr.changeContext('default');
    contextButtonDisabled = true;
  }}
  context={['my_ctx']}
  inputMapping={{
    name: 'Second Button',
    gamepad: -1,
    buttons: [GamepadButtons.LEFT],
    keys: ['q'],
  }}
  disabled={contextButtonDisabled}
>
  switch back to default context!
</Button>
<br />
<!-- The slider is only active when it has the focus. focus is always local inside a context -->
<!-- 
<p>This is a special area you can activate with the "X" button</p>
-->
<Slider /><br />
<Slider /><br />
<Slider />

<List items={items} bind:selectedIndex={selectedItemIndex}/>

Selected: {items[selectedItemIndex]}

<Joystick bind:position={positionFirst} /><br />
x: {positionFirst[0].toFixed(3)}<br />
y: {positionFirst[1].toFixed(3)}

<!-- The InputManager should be unique in your page. -->
<InputManager bind:this={mgr} />
</main>
</div>

<style>
  .background {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #333;
  }

  .help-modal {
    font-family: sans-serif;
    color: white;
    font-size: 20px;
  }
</style>