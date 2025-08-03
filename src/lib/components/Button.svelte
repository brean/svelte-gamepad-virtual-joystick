<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  import GamepadButtons from "$lib/constants/GamepadButtons.js";
  import Hint from "./Hint.svelte";

  import { registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";

  import ButtonInputComponent from "$lib/input_handling/ButtonInputComponent.js";
  import type ButtonInput from "$lib/models/ButtonInput.js";

  interface Props {
    children: Snippet,
    disabled?: boolean
    onpressed?: () => void,
    onhold?: () => void,
    onrelease?: () => void,
    onpointerout?: () => void,
    style?: string,
    cssclass?: string,
    cssclassWrapper?: string,
    inputMapping?: ButtonInput
    context?: string[]
    requiresFocus?: boolean
    consumePress?: boolean
  }

  let {
    children,
    disabled = false,
    onpressed = undefined,  // only once when the pressed-state changes
    onhold = undefined,   // every event while the button is pressed
    onrelease = undefined,
    onpointerout = undefined,
    style = '',
    cssclass = 'vbutton',
    cssclassWrapper = 'button-wrapper',
    inputMapping = {
      name: '',
      gamepad: -1,
      buttons: [GamepadButtons.DOWN],
      keys: ['e', ' ']
    },
    context = ['default'],
    // button is one of the few elements that can be activated globally by
    // default while other UI-components like Slider, List or Joystick
    // need to be focussed.
    requiresFocus=false,
    consumePress=false
  }: Props = $props();

  let pressedClass = $state<string>('');
  let element: HTMLElement;
  let btnElement = $state<PlainButtonInputElement>();

  export function getElement(): HTMLElement {
    return element;
  }

  onMount(() => {
    btnElement = new PlainButtonInputElement(
      inputMapping, element, requiresFocus,
      onpressed, onhold, onrelease,
      consumePress);
    registerComponent(context, btnElement);
    return () => {
      if (!btnElement) { return };
      unregisterComponent(context, btnElement);
    }
  });

  class PlainButtonInputElement extends ButtonInputComponent {
    onpressed(): boolean {
      pressedClass = 'button_clicked '
      return super.onpressed();
    }

    onrelease(): void {
      pressedClass = ''
      super.onrelease();
    }
  }

</script>

<div class={cssclassWrapper}>
  <button
      bind:this={element}
      {style}
      class={pressedClass + cssclass}
      onpointerdown={btnElement?.onpressed}
      onclick={() => {
        btnElement?.onpressed();
        setTimeout(() => {
          btnElement?.onrelease();
        }, 50);
      }}
      {disabled}
      onpointerup={btnElement?.onrelease}
      onpointerout={onpointerout}>
    {@render children()}
  </button>


  <Hint
      {context}
      keys={inputMapping.keys}
      buttons={inputMapping.buttons}
      style={'left: 50%;'}
      />
</div>

<style>
  .button-wrapper {
    position: relative;
    display: inline-block; /* Or 'block', depending on your layout */
  }

  .button-text {
    position: relative;
    z-index: 2;
  }

</style>