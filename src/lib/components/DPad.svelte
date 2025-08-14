<script lang="ts">
  import GamepadButtons from "$lib/constants/GamepadButtons.js";
  import DPadInputComponent from "$lib/input_handling/DPadInputComponent.js";
  import type DPadInput from "$lib/models/DPadInput.js";
    import { registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";
  import { onMount } from "svelte";
  
  interface Props {
    inputMapping?: DPadInput
    position?: [x: number, y: number]
    context?: string[]
    requiresFocus?: boolean
    scale?: number
  }
  
  let {
    inputMapping = {
      name: 'Virtual D-Pad',
      // gamepad
      gamepad: -1,
      axes_x: 0,
      axes_y: 1,
      button_x_pos: [GamepadButtons.DPAD_RIGHT],
      button_x_neg: [GamepadButtons.DPAD_LEFT],
      button_y_pos: [GamepadButtons.DPAD_DOWN],
      button_y_neg: [GamepadButtons.DPAD_UP],
      deadzoneX: 0.25,
      deadzoneY: 0.25,
      // keyboard
      key_x_pos: ['d'],
      key_x_neg: ['a'],
      key_y_pos: ['s'],
      key_y_neg: ['w'],

      invert_x: false,
      invert_y: false,
    },
    position = $bindable([0, 0]),
    context=['default'],
    requiresFocus=false,
    scale=1.5
  }: Props = $props();

  let comp: DPadInputComponent | undefined;
  let element: HTMLElement;

  let rippleLeft = $state(false);
  let rippleRight = $state(false);
  let rippleUp = $state(false);
  let rippleDown = $state(false);

  function update(active: boolean, pos: [x: number, y: number]) {
    if (!active) return;
    const new_pos: [x: number, y: number] = [
      Math.round(pos[0]), Math.round(pos[1])];
    // ripple
    rippleLeft = new_pos[0] == -1;
    rippleRight = new_pos[0] == 1;
    rippleUp = new_pos[1] == -1;
    rippleDown = new_pos[1] == 1;
    
    position = new_pos;
  }

  onMount(() => {
    comp = new DPadInputComponent(
      inputMapping, update, element, requiresFocus);
    registerComponent(context, comp);
    return () => {
      if (!comp) return;
      unregisterComponent(context, comp);
    }
  });
</script>

<div bind:this={element} 
  tabindex={0}
  role="button"
  onkeydown={() => {element.focus()}}
  onclick={() => {element.focus()}}
>
<svg width={96*scale} height={96*scale} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- SVG definitions and base paths remain the same -->
  <defs>
    <linearGradient gradientUnits="userSpaceOnUse" x1="-819.2" x2="819.2" spreadMethod="pad" gradientTransform="matrix(0 0.05859375 -0.05859375 0 48 48)" id="gradient0">
      <stop offset="0" stop-color="#333341"/>
      <stop offset="1" stop-color="#1E1E23"/>
    </linearGradient>
  </defs>
  <g transform="scale({scale})">
  <g>
    <path stroke="none" fill="url(#gradient0)" d="M36 0 L60 0 Q62.5 0 64.25 1.75 66 3.5 66 6 L66 30 90 30 Q92.5 30 94.25 31.75 96 33.5 96 36 L96 60 Q96 62.5 94.25 64.25 92.5 66 90 66 L66 66 66 90 Q66 92.5 64.25 94.25 62.5 96 60 96 L36 96 Q33.5 96 31.75 94.25 30 92.5 30 90 L30 66 6 66 Q3.5 66 1.75 64.25 0 62.5 0 60 L0 36 Q0 33.5 1.75 31.75 3.5 30 6 30 L30 30 30 6 Q30 3.5 31.75 1.75 33.5 0 36 0 M60 6 L36 6 36 36 6 36 6 60 36 60 36 90 60 90 60 60 90 60 90 36 60 36 60 6"/>
    <path stroke="none" fill="#1E1E23" d="M60 6 L60 36 90 36 90 60 60 60 60 90 36 90 36 60 6 60 6 36 36 36 36 6 60 6"/>
    <path fill="none" stroke="#151519" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" d="M60 6 L60 36 90 36 90 60 60 60 60 90 36 90 36 60 6 60 6 36 36 36 36 6 60 6"/>
    <path stroke="none" fill="#3F3F4D" d="M51 48 Q51 49.25 50.1 50.1 49.25 51 48 51 46.75 51 45.85 50.1 45 49.25 45 48 45 46.75 45.85 45.85 46.75 45 48 45 49.25 45 50.1 45.85 51 46.75 51 48"/>
    <path stroke="none" id="dpad-arrow-up" class={position[1] === -1 ? "dpad-arrow-pressed" : "dpad-arrow"} d="M43.15 20.65 L47.15 14.45 Q47.35 14.1 47.7 14.05 L48.3 14.05 Q48.6 14.1 48.8 14.45 L52.9 20.65 53 21.3 52.7 21.75 52.05 22 43.95 22 43.3 21.75 43 21.3 Q42.95 20.95 43.15 20.65"/>
    <path stroke="none" id="dpad-arrow-down" class={position[1] === 1 ? "dpad-arrow-pressed" : "dpad-arrow"} d="M43.15 75.35 L43 74.7 43.3 74.25 Q43.55 74 43.95 74 L52.05 74 Q52.4 74 52.7 74.25 L53 74.7 52.9 75.35 48.8 81.55 48.3 81.95 47.7 81.95 47.15 81.55 43.15 75.35"/>
    <path stroke="none" id="dpad-arrow-right" class={position[0] === 1 ? "dpad-arrow-pressed" : "dpad-arrow"} d="M75.35 43.15 L81.55 47.15 81.95 47.7 81.95 48.3 81.55 48.8 75.35 52.9 74.7 53 74.25 52.7 74 52.05 74 43.95 Q74 43.55 74.25 43.3 L74.7 43 75.35 43.15"/>
    <path stroke="none" id="dpad-arrow-left" class={position[0] === -1 ? "dpad-arrow-pressed" : "dpad-arrow"} d="M20.65 43.15 L21.3 43 21.75 43.3 22 43.95 22 52.05 21.75 52.7 21.3 53 20.65 52.9 14.45 48.8 14.05 48.3 14.05 47.7 Q14.1 47.35 14.45 47.15 L20.65 43.15"/>
  </g>

  <g id="dpad-up" class={'dpad-button' + (rippleUp ? ' active' : '')}
    onpointerdown={() => {position[1] = inputMapping.invert_y ? 1 : -1}}
    onpointerup={() => {position[1] = 0; rippleUp = false}}
  >
    <rect width="38" height="30" x="29" y="0" />
    <rect class="ripple" width="38" height="38" x="29" y="0" rx="6" />
  </g>
  <g id="dpad-left" class={'dpad-button' + (rippleLeft ? ' active' : '')}
    onpointerdown={() => {position[0] = inputMapping.invert_x ? 1 : -1}}
    onpointerup={() => {position[0] = 0; rippleLeft = false;}}
  >
    <rect width="30" height="36" x="0" y="30" />
    <rect class="ripple" width="38" height="38" x="0" y="29" rx="6" />
  </g>
  <g id="dpad-right" class={'dpad-button' + (rippleRight ? ' active' : '')}
    onpointerdown={() => {position[0] = inputMapping.invert_x ? -1 : 1}}
    onpointerup={() => {position[0] = 0; rippleRight = false;}}
  >
    <rect width="30" height="36" x="66" y="30" />
    <rect class="ripple" width="38" height="38" x="58" y="29" rx="6" />
  </g>
  <g id="dpad-down" class={'dpad-button' + (rippleDown ? ' active' : '')}
    onpointerdown={() => {position[1] = inputMapping.invert_y ? -1 : 1}}
    onpointerup={() => {position[1] = 0; rippleDown = false}}
  >
    <rect width="38" height="30" x="29" y="67" />
    <rect class="ripple" width="38" height="38" x="29" y="60" rx="6" />
  </g>
  </g>
</svg>
</div>

<svelte:window onpointerup={() => {position = [0, 0]}} />

<style>
  .dpad-arrow {
    fill: #323240;
  }

  .dpad-arrow-pressed {
    fill: #7e7e80;
  }

  .dpad-button {
    cursor: pointer;
  }

  .dpad-button rect {
    fill: transparent;
  }
  
  .dpad-button .ripple {
    fill: rgba(255, 255, 255, 0.5);
    transform: scale(.7);
    opacity: 0;
    transform-origin: center;
    transform-box: fill-box;
  }

  @keyframes ripple-animation {
    from {
      transform: scale(.7);
      opacity: 0.5;
    }
    to {
      transform: scale(1.0);
      opacity: 0;
    }
  }

  .dpad-button.active .ripple, .dpad-button:active .ripple {
    animation: ripple-animation 0.3s ease-out;
  }
</style>