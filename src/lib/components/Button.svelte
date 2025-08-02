<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import { fade } from "svelte/transition";

  import type ButtonInput from "$lib/models/ButtonInput.js";
  import ButtonInputComponent from "$lib/input_handling/ButtonInputComponent.js";
  import Icon from "./Icon.svelte";
  import GamepadButtons from "$lib/constants/GamepadButtons.js";
  import { component_state, registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";

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

  {#if component_state.showHints && context.includes(component_state.context)}
  <div class="hint-container" out:fade in:fade>
    <div class="hint hint-up">
        {#if inputMapping.keys.length > 0 }
          <Icon 
            type='keyboard_mouse'
            input={inputMapping.keys[0]}></Icon>
        {/if}
        {#if inputMapping.buttons.length > 0 }
          <Icon
            type='generic'
            input={inputMapping.buttons[0]}></Icon>
        {/if}
      </div>
  </div>
  {/if}
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

  .hint-container {
    top: 100%;
    left: 50%;
  }

  .hint {
    top: 20px;
  }
</style>