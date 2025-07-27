<script lang="ts">
  import type ButtonInput from "$lib/models/ButtonInput.js";
  import { type Snippet } from "svelte";
  import ButtonBase from "./ButtonBase.svelte";
  import { component_store } from "$lib/state/components.svelte.js";
  import Icon from "./Icon.svelte";
  import { fade } from "svelte/transition";

  interface Props {
    children: Snippet,
    disabled?: boolean
    onpressed?: (() => void),
    onhold?: (() => void),
    onrelease?: (() => void),
    onpointerout?: (() => void),
    pressed?: boolean,
    style?: string,
    cssclass?: string,
    input_mapping?: ButtonInput
    context?: string[]
    invert_colors?: boolean
  }

  let {
    children,
    disabled = false,
    onpressed = undefined,  // only once when the pressed-state changes
    onhold = undefined,   // every event while the button is pressed
    onrelease = undefined,
    onpointerout = undefined,
    pressed = false,
    style = '',
    cssclass = 'vbutton',
    input_mapping = {
      name: '',
      gamepad: -1,
      buttons: [0],
      keys: ['e', ' ']
    },
    context = ['default'],
    invert_colors=true
  }: Props = $props();

  const _onpressed = () => {
    pressed = true;
    if (onpressed) {
      onpressed();
    }
  }

  const _onrelease = () => {
    pressed = false;
    if (onrelease) {
      onrelease();
    }
  }

  const _onpointerout = () => {
    pressed = false;
    if (onpointerout) {
      onpointerout();
    }
  }
</script>

<ButtonBase
  {disabled}
  {onpressed}
  {onhold}
  {onrelease}
  {input_mapping}
  {context}
  bind:pressed>
  <div class="button-wrapper">
    <button
        {style}
        class={(!disabled && pressed ? 'button_clicked ' : '') + cssclass}
        onpointerdown={_onpressed}
        onclick={() => {
          _onpressed();
          setTimeout(() => {
            _onrelease();
          }, 50);
        }}
        {disabled}
        onpointerup={_onrelease}
        onpointerout={_onpointerout}>
      {@render children()}
    </button>

    {#if component_store.showHints}
    <div class="hint-container" out:fade in:fade>
      <div class="hint hint-up">
          {#if input_mapping.keys.length > 0 }
            <Icon 
              type='keyboard_mouse'
              input={input_mapping.keys[0]}
              {invert_colors}></Icon>
          {/if}
          {#if input_mapping.buttons.length > 0 }
            <Icon
              type='ps4'
              input={input_mapping.buttons[0]}
              {invert_colors}></Icon>
          {/if}
        </div>
    </div>
    {/if}
  </div>
</ButtonBase>
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
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    pointer-events: none; /* Allows clicks to pass through to the button */
    background: white;
    border-radius: 6px;
    margin: 6px;
    padding: 6px
  }

  .hint {
    top: 20px;
  }
</style>