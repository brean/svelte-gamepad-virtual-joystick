<script lang="ts">
/**
press a special button to activate a custom function 
for example show all warnings
*/
  import type ButtonInput from "$lib/models/ButtonInput.js";
  import { type Snippet } from "svelte";
  import ButtonBase from "./ButtonBase.svelte";

   interface Props {
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
  }

  let {
    disabled = false,
    onpressed = undefined,  // only once when the pressed-state changes
    onhold = undefined,   // every event while the button is pressed
    onrelease = undefined,
    pressed = false,
    input_mapping = {
      name: 'Help',
      gamepad: -1,
      buttons: [8],
      keys: ['h']
    },
    context = ['default']
  }: Props = $props();

</script>

<ButtonBase
  {disabled}
  {onpressed}
  {onhold}
  {onrelease}
  {input_mapping}
  {context}
  bind:pressed>
</ButtonBase>