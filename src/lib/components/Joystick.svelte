<script lang="ts">
  import { angle, distance, clamp, findCoord, thisGamepad } from "$lib/utils.js";
  import { onMount } from "svelte";
  import type JoystickInput from "$lib/models/JoystickInput.js";
  import InputComponent from "$lib/input_handling/InputComponent.js";
  import { component_store, registerComponent, unregisterComponent } from "$lib/state/components.svelte.js";
  import Icon from "./Icon.svelte";
  import { fade } from "svelte/transition";

  interface Props {
    disabled?: boolean
    size?: number
    backgroundWidth?: number
    backgroundHeight?: number
    color?: string
    defaultOpacity?: number
    activeOpacity?: number
    border?: number
    borderColor?: string
    position?: [x: number, y: number]
    style?: string
    inputMapping?: JoystickInput
    context?: string[]
    requiresFocus: boolean
  }

  let {
    disabled = false,
    size = 100,
    backgroundWidth = 200,
    backgroundHeight = 200,
    color = 'rgb(106, 191, 163)', // default color for the joystick, ABISKO_GREEN
    defaultOpacity = 0.5,
    activeOpacity = 0.8,
    border = 1,
    borderColor = 'black',
    // position is the relative position of the pad on the stick, between -1 and 1.
    position = $bindable<[x: number, y: number]>([0, 0]),
    style = 'background-color: rgb(215, 219, 221);', /* MOON_GRAY */
    inputMapping = {
      name: 'Virtual Joystick',
      // gamepad
      gamepad: -1,
      axes_x: 0,
      axes_y: 1,
      button_x_pos: [15],
      button_x_neg: [14],
      button_y_pos: [13],
      button_y_neg: [12],
      deadzoneX: 0.05,
      deadzoneY: 0.05,
      // keyboard
      key_x_pos: ['d'],
      key_x_neg: ['a'],
      key_y_pos: ['s'],
      key_y_neg: ['w'],

      invert_x: false,
      invert_y: false,
    },
    context=['default'],
    requiresFocus=false
  }: Props = $props();

  let pos: [x: number, y: number] = [0, 0]

  const radius = size/2;
  let pointerActive: boolean = false;
 
  // if the user uses a touch, mouse or keyboard input device
  // we disable the gamepad
  let gamepadActive = true;
  let opacity = $state(defaultOpacity);

  class JoystickInputComponent extends InputComponent {
    xPos = false;
    xNeg = false;
    yPos = false;
    yNeg = false;

    onrelease(): void {
      let x = pos[0];
      let y = pos[1];
      if (this.xPos || this.xNeg) {
        x = 0;
      }

      if (this.yPos || this.yNeg) {
        y = 0;
      }

      if (x == pos[0] && y == pos[1]) {
        return
      }

      // Proceed with calculations now that we know a valid key was pressed.
      calcPos(x * radius, y * radius);
      pos = [x, y];
      gamepadActive = true;
    }

    onhold(): void {
      let x = pos[0];
      let y = pos[1];
      if (this.xPos) {
        x = 1;
      } else if (this.xNeg) {
        x = -1;
      }

      if (this.yPos) {
        y = 1;
      } else if (this.yNeg) {
        y = -1;
      }

      if (x == pos[0] && y == pos[1]) {
        return
      }

      // Proceed with calculations now that we know a valid key was pressed.
      calcPos(x * radius, y * radius);
      pos = [x, y];
      gamepadActive = false;
    }

    // keyboard
    updateKeys(event: KeyboardEvent) {
      this.xPos = inputMapping.key_x_pos.includes(event.key);
      this.xNeg = inputMapping.key_x_neg.includes(event.key);
      this.yPos = inputMapping.key_y_pos.includes(event.key);
      this.yNeg = inputMapping.key_y_neg.includes(event.key);
    }

    onkeyrelease(event?: KeyboardEvent): void {
      if (disabled || !event) {
        return
      }
      this.updateKeys(event)
      super.onkeyrelease(event);
    }

    onkeyhold(event?: KeyboardEvent): void {
      if (disabled || !event) {
        return
      }
      this.updateKeys(event)
      super.onkeyhold(event);
    }

    // gamepad
    updateButton(idx: number) {
      this.xPos = inputMapping.button_x_pos.includes(idx);
      this.xNeg = inputMapping.button_x_neg.includes(idx);
      this.yPos = inputMapping.button_y_pos.includes(idx);
      this.yNeg = inputMapping.button_y_neg.includes(idx);
    }

    onbuttonhold(gamepad: Gamepad, btn: number): void {
      if (disabled) {
        return
      }
      this.updateButton(btn)
      super.onbuttonhold(gamepad, btn);
    }

    onbuttonrelease(gamepad: Gamepad, btn: number): void {
      if (disabled) {
        return
      }
      this.updateButton(btn)
      super.onbuttonrelease(gamepad, btn);
    }

    onupdate(gamepad: Gamepad): void {
      if (disabled || !gamepadActive || !thisGamepad(inputMapping, gamepad)) {
        return
      }
      let xcoord = gamepad.axes[inputMapping.axes_x];
      let ycoord = gamepad.axes[inputMapping.axes_y];
      if (inputMapping.invert_x) {
        xcoord = -xcoord;
      }
      if (inputMapping.invert_y) {
        ycoord = -ycoord;
      }
      if (Math.abs(xcoord) < inputMapping.deadzoneX && 
          Math.abs(ycoord) < inputMapping.deadzoneY) {
        opacity = defaultOpacity;
        position = [0, 0]
        return;
      }
      opacity = activeOpacity;
      position = [xcoord, ycoord];
    }
  }

  function onpointermove(evt: MouseEvent) {
    if (disabled || !inputMapping.gamepad || !pointerActive || !evt.target) {
      return
    }
    gamepadActive = false;
    const rect = (evt.target as any).getBoundingClientRect();
    const mouseX = evt.x - rect.x;
    const mouseY = evt.y - rect.y;
    setPosition(mouseX, mouseY);
  }

  function setPosition(posx: number, posy: number) {
    // get relative position or the pointer from the 
    // center of the joystick area
    let x = (posx - (backgroundWidth / 2));
    let y = (posy - (backgroundHeight / 2));
    calcPos(x, y);
  }

  function calcPos(x:number, y:number) {
    // distance of touched point from the center
    const raw_dist = distance(x, y)
    const a = angle(x, y)

    let dist = clamp(raw_dist, radius);
    let coords = findCoord(dist, a);
    // normalize corrds
    let xcoord = coords[0] / radius
    let ycoord = coords[1] / radius
    if (Math.abs(xcoord) < inputMapping.deadzoneX && 
        Math.abs(ycoord) < inputMapping.deadzoneY) {
      position = [0, 0];
      opacity = defaultOpacity;
      return;
    }
    xcoord = Math.abs(xcoord) < 0.000001 ? 0 : xcoord;
    ycoord = Math.abs(ycoord) < 0.000001 ? 0 : ycoord;
    opacity = activeOpacity;
    position = [xcoord, ycoord]
  }

  function reset() {
    /** reset on pointer up */
    pointerActive = false;
    opacity = defaultOpacity;
    position = [0, 0]
  }

  const activateGamepad = () => {
    if (disabled) {
        return
      }
      gamepadActive = true;
  }

  onMount(() => {
    const comp = new JoystickInputComponent(inputMapping);
    registerComponent(context, comp);
    return () => {
      unregisterComponent(context, comp);
    }
  });
</script>

<svelte:window on:pointerup={reset} />

<div id="joystick_area"
    tabindex={0}
    role="button"
    {style}
    style:width={backgroundWidth + 'px'}
    style:height={backgroundHeight + 'px'}
    onpointerdown={(e) => {
      if (disabled) {
        return
      }
      // |capture|stopPropagation|nonpassive
      e.stopImmediatePropagation();
      pointerActive = true;
      onpointermove(e)}}
    onpointerup={activateGamepad}
    onpointerleave={activateGamepad}
    onpointermove={onpointermove}
    ontouchstart={() => {}}
    ontouchend={activateGamepad}
    onpointerout={activateGamepad}
    >
  {#if component_store.showHints}
  <div
    class="hints_container"
    style:width={backgroundWidth + 'px'}
    style:height={backgroundHeight + 'px'}
    out:fade in:fade
  >
    <div class="hint">
      {#if [0, 1].includes(inputMapping.axes_x) && [0, 1].includes(inputMapping.axes_y) }
      <Icon 
          type='generic'
          input={'axis_left'}
          ></Icon>
      {:else if [2, 3].includes(inputMapping.axes_x) && [2, 3].includes(inputMapping.axes_y) }
      <Icon 
          type='generic'
          input={'axis_right'}></Icon>
      {/if}
    </div>
    <div class="hint hint-up">
      {#if inputMapping.key_y_neg.length > 0 }
        <Icon 
          type='keyboard_mouse'
          input={inputMapping.key_y_neg[0]}></Icon>
      {/if}
      {#if inputMapping.button_y_neg.length > 0 }
        <Icon
          type='generic'
          input={inputMapping.button_y_neg[0]}></Icon>
      {/if}
    </div>
    <div class="hint hint-down">
      {#if inputMapping.key_y_pos.length > 0}
        <Icon 
          type='keyboard_mouse'
          input={inputMapping.key_y_pos[0]}></Icon>
      {/if}
      {#if inputMapping.button_y_pos.length > 0 }
        <Icon
          type='generic'
          input={inputMapping.button_y_pos[0]}></Icon>
      {/if}
    </div>
    <div class="hint hint-left">
      {#if inputMapping.key_x_neg.length > 0}
        <Icon 
          type='keyboard_mouse'
          input={inputMapping.key_x_neg[0]}></Icon>
        <br />
      {/if}
      {#if inputMapping.button_x_neg.length > 0 }
        <Icon
          type='generic'
          input={inputMapping.button_x_neg[0]}></Icon>
      {/if}
    </div>
    <div class="hint hint-right">
      {#if inputMapping.key_x_pos.length > 0}
        <Icon 
          type='keyboard_mouse'
          input={inputMapping.key_x_pos[0]}></Icon>
        <br />
      {/if}
      {#if inputMapping.button_x_pos.length > 0 }
        <Icon
          type='generic'
          input={inputMapping.button_x_pos[0]}></Icon>
      {/if}
    </div>
  </div>
  {/if}

  <div class="joystick_container"
    style:left={((backgroundWidth - size) / 2) + 'px'}
    style:top={((backgroundHeight - size) / 2) + 'px'}
  >
    <div class="joystick_back"
      style:width={size + 'px'}
      style:height={size + 'px'}
      style:background={color}
      style:opacity={opacity}
      style:transition={"none"}
      style:border={border > 0 ? border + 'px solid ' + borderColor : 0}
    ></div>
    <div class="joystick_front"
      style:left={position[0] * radius + 'px'}
      style:top={position[1] * radius + 'px'}
      style:margin-top={(radius / 2) + 'px'}
      style:margin-left={(radius / 2) + 'px'}
      style:transition={"opacity 0.2s ease-in-out"}
      style:width={(radius) + 'px'}
      style:height={(radius) + 'px'}
      style:background={color}
      style:opacity={opacity}
      style:border={border > 0 ? border + 'px solid ' + borderColor : 0}
    ></div>
  </div>

</div>

<style>
  :global(html), :global(body) {
    touch-action: none; /* This prevents pull-to-refresh */
  }

  #joystick_area {
    touch-action: none;
  }

  .joystick_container {
    position: relative;
    touch-action: none;
  }

  .joystick_back {
    pointer-events: none;
    position: absolute;
    display: block;
    margin-left: 0px;
    margin-top: 0px;
    border-radius: 50%;
    touch-action: none;
  }

  .joystick_front {
    pointer-events: none;
    position: absolute;
    display: block;
    border-radius: 50%;
    touch-action: none;
  }

  /* Hint styles */
   .hints_container {
    position: absolute;
    pointer-events: none; /* Prevents this layer from capturing clicks */
    user-select: none;   /* Prevents text selection */
  }

  .hint {
    position: absolute;
    color: #555;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: bold;
  }

  /* Position each hint inside the square hints_container */
  .hint-up {
    top: 6px; /* Small padding from the top edge */
    left: 50%;
    transform: translateX(-50%);
  }

  .hint-down {
    bottom: 6px; /* Small padding from the bottom edge */
    left: 50%;
    transform: translateX(-50%);
  }

  .hint-left {
    left: 8px; /* Small padding from the left edge */
    top: 50%;
    transform: translateY(-50%);
  }

  .hint-right {
    right: 8px; /* Small padding from the right edge */
    top: 50%;
    transform: translateY(-50%);
  }
</style>
