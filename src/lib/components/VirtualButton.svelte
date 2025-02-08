<script lang="ts">
  import type VirtualButtonInput from "$lib/models/VirtualButtonInput.js";
  import { type Snippet } from "svelte";
  import ButtonBase from "./ButtonBase.svelte";

  interface Props {
    children: Snippet,
    disabled?: boolean
    onpressed?: (() => void),
    onhold?: (() => void),
    onrelease?: (() => void),
    pressed?: boolean,
    style?: string,
    cssclass?: string,
    input_mapping?: VirtualButtonInput
  }

  let {
    children,
    disabled = false,
    onpressed = undefined,  // only once when the pressed-state changes
    onhold = undefined,   // every event while the button is pressed
    onrelease = undefined,
    pressed = false,
    style = '',
    cssclass = 'vbutton',
    input_mapping = {
      name: '',
      gamepad: -1,
      gamepad_buttons: [0],
      keyboard_keys: ['e', ' ']
    }
  }: Props = $props();

  const _onpressed = () => {
    if (disabled) {
      return;
    }
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
</script>

<ButtonBase
  {disabled}
  {onpressed}
  {onhold}
  {onrelease}
  {input_mapping}
  bind:pressed>
<button
    {style}
    class={(!disabled && pressed ? 'button_clicked ' : '') + cssclass}
    onpointerdown={_onpressed}
    onpointerup={_onrelease}>
  {@render children()}
</button>
</ButtonBase>