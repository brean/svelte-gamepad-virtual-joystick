<script lang="ts">
  import type ButtonInput from "$lib/models/ButtonInput.js";
  import { onMount, type Snippet } from "svelte";
  import ButtonInputComponent from "$lib/input_handling/ButtonInputComponent.js";
  import { component_state, registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";
  import Icon from "./Icon.svelte";
  import { fade } from "svelte/transition";
  import GamepadButtons from "$lib/constants/GamepadButtons.js";

  interface Props {
    children: Snippet,
    disabled?: boolean
    onpressed?: (() => boolean),
    onhold?: (() => void),
    onrelease?: (() => void),
    onpointerout?: (() => void),
    style?: string,
    cssclass?: string,
    inputMapping?: ButtonInput
    context?: string[]
    requiresFocus?: boolean
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
    requiresFocus=false
  }: Props = $props();

  let pressedClass = $state<string>('');
  let focusElement: HTMLElement;
  let btnElement = $state<PlainButtonInputElement>();

  onMount(() => {
    btnElement = new PlainButtonInputElement(
      inputMapping, focusElement, requiresFocus,
      onpressed, onhold, onrelease);
    registerComponent(context, btnElement);
    return () => {
      if (!btnElement) { return };
      unregisterComponent(context, btnElement);
    }
  });

  class PlainButtonInputElement extends ButtonInputComponent {
    onpressed(): boolean {
      const parentPressed = super.onpressed();
      pressedClass = 'button_clicked '
      if (focusElement) {
        focusElement.focus();
      }
      return parentPressed;
    }

    onrelease(): void {
      pressedClass = ''
      super.onrelease();
    }
  }

  
  const _onpointerout = () => {
    if (btnElement) {
      btnElement.pressed = false;
    }
    if (onpointerout) {
      onpointerout();
    }
  }
</script>

<div class="button-wrapper">
  <button
      bind:this={focusElement}
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
      onpointerout={_onpointerout}>
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