<script lang="ts">
  import { onkeypressed, onkeyrelease, onkeyhold } from '$lib/store/keyboard_callbacks.svelte.js'
  import { onbuttonpressed, onbuttonrelease, onbuttonhold, onupdate } from '$lib/store/gamepad_callbacks.svelte.js';

  import { angle, distance, clamp, findCoord, thisGamepad } from "$lib/utils.js";
  import { onMount } from "svelte";
  import type JoystickInput from "$lib/models/JoystickInput.js";
  import { inputs } from "$lib/store/inputs.svelte.js";

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
    input_mapping?: JoystickInput
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
    input_mapping = {
      name: 'Virtual Joystick',
      gamepad: -1,
      axes_x: 0,
      axes_y: 1,
      key_x_pos: 'd',
      key_x_neg: 'a',
      key_y_pos: 's',
      key_y_neg: 'w',
      deadzoneX: 0.05,
      deadzoneY: 0.05,
      invert_x: false,
      invert_y: false
    }
  }: Props = $props();

  export function update(pos: [x: number, y: number]) {
    // get position values from another external source.
    // make sure x and y are valid in your own code.
    // take a look at the onpointermove-function on how
    // to clamp and validate your coordinates.
    position = pos;
  }

  const radius = size/2;
  let pointerActive: boolean = false;
 
  // if the user uses a touch, mouse or keyboard input device
  // we disable the gamepad
  let gamepadActive = true;
  let opacity = $state(defaultOpacity);

  inputs.joysticks.push(input_mapping);
  const _input = inputs.joysticks[inputs.joysticks.length - 1];

  function onpointermove(evt: MouseEvent) {
    if (disabled || !_input.gamepad || !pointerActive || !evt.target) {
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
    
    // distance of touched point from the center
    const raw_dist = distance(x, y)
    const a = angle(x, y)

    let dist = clamp(raw_dist, radius);
    let coords = findCoord(dist, a);
    // normalize corrds
    let xcoord = coords[0] / radius
    let ycoord = coords[1] / radius
    if (Math.abs(xcoord) < _input.deadzoneX && 
        Math.abs(ycoord) < _input.deadzoneY) {
      position = [0, 0];
      opacity = defaultOpacity;
      return;
    }
    opacity = activeOpacity;
    position = [xcoord, ycoord]
  }

  function reset() {
    pointerActive = false;
    opacity = defaultOpacity;
    position = [0, 0]
  }

  const _custom_onhold = (event: KeyboardEvent) => {
    // a keyboard button has been pressed
    if (disabled) {
      return
    }
    let down = false;
    if (_input.key_x_pos == event.key) {
      position[0] = 1;
      down = true;
    }
    else if (_input.key_x_neg == event.key) {
      position[0] = -1;
      down = true;
    }
    if (_input.key_y_pos == event.key) {
      position[1] = 1;
      down = true;
    }
    else if (_input.key_y_neg == event.key) {
      position[1] = -1;
      down = true;
    }
    if (!down) {
      return
    }
    gamepadActive = false;
    opacity = activeOpacity;
    position = position;
  }

  const _custom_onrelease = (event: KeyboardEvent) => {
    let down = false;
    if (_input.key_x_pos == event.key || _input.key_x_neg == event.key) {
      position[0] = 0;
      down = true;
    }
    if (_input.key_y_pos == event.key || _input.key_y_neg == event.key) {
      position[1] = 0;
      down = true;
    }
    if (!down) {
      return
    }
    gamepadActive = true;
    opacity = defaultOpacity;
    position = position;
  }

  const _custom_onupdate = (gamepad: Gamepad) => {
    if (disabled || !gamepadActive || !thisGamepad(_input, gamepad)) {
      return
    }
    let xcoord = gamepad.axes[_input.axes_x];
    let ycoord = gamepad.axes[_input.axes_y];
    if (_input.invert_x) {
      xcoord = -xcoord;
    }
    if (_input.invert_y) {
      ycoord = -ycoord;
    }
    if (Math.abs(xcoord) < _input.deadzoneX && 
        Math.abs(ycoord) < _input.deadzoneY) {
      opacity = defaultOpacity;
      position = [0, 0]
      return;
    }
    opacity = activeOpacity;
    position = [xcoord, ycoord];
  }

  onMount(() => {
    onkeyhold.push(_custom_onhold);
    onkeyrelease.push(_custom_onrelease);
    onupdate.push(_custom_onupdate);
    return () => {
      // cleanup on destroy
      // keyboard
      onkeyhold.splice(onkeyhold.indexOf(_custom_onhold), 1);
      onkeyrelease.splice(onkeyrelease.indexOf(_custom_onrelease), 1);
      onupdate.splice(onupdate.indexOf(_custom_onupdate), 1);
      // unregister configuration
      inputs.joysticks.splice(inputs.joysticks.indexOf(_input), 1);
    }
  });

  const activateGamepad = () => {
    if (disabled) {
        return
      }
      gamepadActive = true;
  }
</script>

<svelte:window on:pointerup={reset} />

<div id="joystick_area"
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
  <div class="joystick_container"
    style:left={((backgroundWidth - size) / 2) + 'px'}
    style:top={((backgroundHeight - size) / 2) + 'px'}
  >
    <div class="joystick_back"
      style:width={size + 'px'}
      style:height={size + 'px'}
      style:background={color}
      style:opacity={opacity}
      style:border={border > 0 ? border + 'px solid ' + borderColor : 0}
    ></div>
    <div class="joystick_front"
      style:left={position[0] * radius + 'px'}
      style:top={position[1] * radius + 'px'}
      style:margin-top={(radius / 2) + 'px'}
      style:margin-left={(radius / 2) + 'px'}
      style:transition={'none'}
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
</style>
