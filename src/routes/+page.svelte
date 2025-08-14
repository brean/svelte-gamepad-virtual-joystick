<script lang="ts">
  import { onMount } from "svelte";

  import Button from "$lib/components/Button.svelte";

  
  import Joystick from "$lib/components/Joystick.svelte";

  import GamepadButtons from "$lib/constants/GamepadButtons.js";

  import MainNav from "../demo/MainNav.svelte";
  import InputManager from "$lib/input_handling/InputManager.svelte";

  let positionFirst: [x: number, y: number] = $state([0, 0]);
  let contextButtonDisabled = $state(true);
  let navOpen: boolean = $state(false);
  let showInfo = $state(true);
  let mgr: InputManager | undefined = $state(undefined);

  onMount(() => {
    setTimeout(() => {
      showInfo = false;
    }, 2000);
  });

</script>

<MainNav bind:open={navOpen} bind:mgr bind:showInfo />

<main style:margin-left={navOpen ? '250px' : 0}>

<Button
  onrelease={() => {
    if (!mgr) return
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
    if (!mgr) return
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




<Joystick bind:position={positionFirst} /><br />
x: {positionFirst[0].toFixed(3)}<br />
y: {positionFirst[1].toFixed(3)}
<br />


</main>

<style>
  .help-modal {
    font-family: sans-serif;
    color: white;
    font-size: 20px;
  }
</style>