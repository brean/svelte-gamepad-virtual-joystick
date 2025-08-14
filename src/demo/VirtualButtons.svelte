<!-- Virtual buttons for the demo -->
<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import VirtualButton from "$lib/components/VirtualButton.svelte";
  import { component_state, GamepadButtons } from "$lib/index.js";
  import { focusNextElement, focusPreviousElement } from "$lib/utils.js";
  import { fade } from "svelte/transition";

  interface Props {
    showInfo: boolean
  }
  let {
    showInfo = $bindable(false)
  }: Props = $props();

  const hintMapping = {
    name: 'Hint',
    gamepad: -1,
    buttons: [GamepadButtons.VIEW],
    keys: ['h']
  }
</script>

<VirtualButton
  context={['default', 'my_ctx', 'nav']}
  onpressed={() => {
    // show all hints
    component_state.showHints = !component_state.showHints;
  }}
  inputMapping={hintMapping}
></VirtualButton>

<VirtualButton
  onpressed={() => {
    focusNextElement();
  }}
  inputMapping={{
    name: 'Focus next',
    gamepad: -1,
    buttons: [GamepadButtons.TRIGGER_RIGHT],
    keys: ['k']
  }}
></VirtualButton>
<VirtualButton
  onpressed={() => {
    focusPreviousElement();
  }}
  inputMapping={{
    name: 'Focus previous',
    gamepad: -1,
    buttons: [GamepadButtons.TRIGGER_LEFT],
    keys: ['i']
  }}
></VirtualButton>

  {#if showInfo}
  <div
    style:pointer-events="none"
    style:z-index="999"
    transition:fade={{ duration: 300 }}
    class="help-modal">
    <div class="help-content">
      <Icon 
        type="keyboard_mouse" 
        input={hintMapping.keys[0]}
        color="#FFFFFF"></Icon>
      or 
      <Icon
        type="ps4"
        input={hintMapping.buttons[0]}
        color="#FFFFFF"></Icon>
      toggle help.
    </div>
  </div>
  {/if}