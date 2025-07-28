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
  }}
  input_mapping={{
    name: 'Help',
    gamepad: -1,
    buttons: [8],
    keys: ['h']
  }}
></VirtualButton>

<div class="background">
<main>
  {#if showInfo}
  <div transition:fade={{ duration: 300 }} class="help-modal">
    <div class="help-content">
      <p>
        <Icon type="keyboard_mouse" input="h" color="#FFFFFF"></Icon>
        or 
        <Icon type="ps4" input="8"  color="#FFFFFF"></Icon>
        toggle help.
      </p>
    </div>
  </div>
  {/if}

<Button
  onrelease={() => {
    mgr.changeContext('my_ctx');
    contextButtonDisabled = false;
  }}
  input_mapping={{
    name: 'Main Button',
    gamepad: -1,
    buttons: [0],
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
  input_mapping={{
    name: 'Second Button',
    gamepad: -1,
    buttons: [0],
    keys: ['e'],
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

<Joystick bind:position={positionFirst} invert_colors={true} /><br />
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

  p {
    font-family: sans-serif;
    color: white;
    font-size: 20px;
  }
</style>