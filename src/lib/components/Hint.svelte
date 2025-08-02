<script lang="ts">
  import { component_state } from "$lib/state/components.svelte.js";
  import { fade } from "svelte/transition";
  import Icon from "./Icon.svelte";
  
  let {
    keys,
    buttons,
    context = ['default'],
    text = '',
    class: clz = 'hint-container',
    style = ''
  } = $props();
</script>


{#if component_state.showHints && context.includes(component_state.context)}
<div class={clz} {style} out:fade in:fade>
    <div class="hint">
    {text}
    {#if keys.length > 0 }
        <Icon
        type='keyboard_mouse'
        input={keys[0]}></Icon>
    {/if}
    {#if buttons.length > 0 }
        <Icon
        type='generic'
        input={buttons[0]}></Icon>
    {/if}
    </div>
</div>
{/if}