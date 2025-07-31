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
    import { disableScrollHandling } from "$app/navigation";

   interface Props {
    disabled?: boolean
    onpressed?: (() => boolean),
    onhold?: (() => void),
    onrelease?: (() => void),
    onpointerout?: (() => void),
    pressed?: boolean,
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
    pressed = false,
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
      onpressed=onpressed, onhold=onhold, onrelease=onrelease
      );
    btnElement.disabled = disabled;
    btnElement.pressed = pressed;
    registerComponent(context, btnElement);
    return () => {
      if (!btnElement) { return };
      unregisterComponent(context, btnElement);
    }
  });

</script>