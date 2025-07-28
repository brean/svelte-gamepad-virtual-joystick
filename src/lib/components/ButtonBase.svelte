<script lang="ts">
  import type ButtonInput from "$lib/models/ButtonInput.js";
  import { onMount, type Snippet } from "svelte";
  import InputComponent from "$lib/input_handling/InputComponent.js";
  import { registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";

  interface Props {
    children?: Snippet,
    disabled?: boolean
    onpressed?: (() => void),
    onhold?: (() => void),
    onrelease?: (() => void),
    pressed?: boolean,
    inputMapping?: ButtonInput
    context?: string[]
  }

  let {
    children,
    disabled = false,
    onpressed = undefined,  // only once when the pressed-state changes
    onhold = undefined,   // every event while the button is pressed
    onrelease = undefined,
    pressed = $bindable(false),
    inputMapping = {
      name: '',
      gamepad: -1,
      buttons: [0],
      keys: ['e', ' ']
    },
    context = ['default']
  }: Props = $props();

  class ButtonInputComponent extends InputComponent {
    // Gamepad
    thisGamepadButton(gamepad: Gamepad, btn: number): boolean {
      return super.thisGamepadButton(gamepad, btn) && 
        (this.input as ButtonInput).buttons.includes(btn)
    }

    onpressed(): boolean {
      if (disabled) {
        return false;
      }
      pressed = true;
      if (onpressed) {
        onpressed();
      }
      return super.onpressed();
    }

    onhold = () => {
      if (!disabled && onhold) {
        onhold();
      }
    }

    onrelease = () => {
      pressed = false;
      if (onrelease) {
        onrelease();
      }
    }

    onkeypressed(event?: KeyboardEvent): boolean {
      return this.thisKey(event) && super.onkeypressed(event);
    }

    onkeyrelease(event?: KeyboardEvent) {
      if (this.thisKey(event)) super.onkeyrelease(event);
    }

    onkeyhold(event?: KeyboardEvent) {
      if (this.thisKey(event)) super.onkeyhold(event);
    }

    // Keyboard
    thisKey(event?: KeyboardEvent): boolean {
      console.log(event.key)
      return (event && (this.input as ButtonInput).keys.includes(event.key)) || false;
    }
  }

  onMount(() => {
    const button = new ButtonInputComponent(inputMapping);
    registerComponent(context, button);
    return () => {
      // cleanup on destroy
      // unregister configuration
      unregisterComponent(context, button);
    }
  });
</script>
{#if children}
  {@render children?.()}
{/if}