<script lang="ts">
/**
press a special button to activate a custom function 
for example show all warnings
*/
  import GamepadButtons from "$lib/constants/GamepadButtons.js";
    import ButtonInputComponent from "$lib/input_handling/ButtonInputComponent.js";
    import type ButtonInput from "$lib/models/ButtonInput.js";
    import { onMount } from "svelte";
    import { registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";

   interface Props {
    disabled?: boolean
    onpressed?: () => void,
    onhold?: () => void,
    onrelease?: () => void,
    style?: string,
    cssclass?: string,
    inputMapping?: ButtonInput
    context?: string[]
  }

  let {
    disabled = false,
    onpressed = undefined,  // only once when the pressed-state changes
    onhold = undefined,   // every event while the button is pressed
    onrelease = undefined,
    inputMapping = {
      name: 'Help',
      gamepad: -1,
      buttons: [GamepadButtons.VIEW],
      keys: ['h']
    },
    context = ['default']
  }: Props = $props();

  onMount(() => {
    const btnElement = new ButtonInputComponent(
      inputMapping, undefined, false,
      onpressed, onhold, onrelease
      );
    btnElement.disabled = disabled;
    registerComponent(context, btnElement);
    return () => {
      if (!btnElement) { return };
      unregisterComponent(context, btnElement);
    }
  });

</script>