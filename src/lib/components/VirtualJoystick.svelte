<script lang="ts">
  import { angle, distance, clamp, findCoord } from "$lib/utils.js";
  import { gamepad_listener } from "$lib/store/gamepad_listener.js";
  import { onMount } from "svelte";
  import type VirtualJoystickInput from "$lib/models/VirtualJoystickInput.js";
  import { virtual_joystick_inputs } from "$lib/store/virtual_joystick_inputs.js";
  import { keyboard_listener } from "$lib/store/keyboard_listener.js";

  interface Props {
    name?: string,
    size?: number,
    backgroundWidth?: number,
    backgroundHeight?: number,
    color?: string,
    background?: string,
    defaultOpacity?: number,
    activeOpacity?: number,
    border?: number,
    borderColor?: string
    position?: [x: number, y: number]
  }

  let {
    name = 'Virtual Joystick',
    size = 100,
    backgroundWidth = 200,
    backgroundHeight = 200,
    color = 'rgb(106, 191, 163)', // default color for the joystick, ABISKO_GREEN
    background = 'rgb(215, 219, 221)', // default color for the background, MOON_GREY
    defaultOpacity = 0.5,
    activeOpacity = 0.8,
    border = 1,
    borderColor = 'black',
    // position is the relative position of the pad on the stick, between -1 and 1.
    position = $bindable<[x: number, y: number]>([0, 0])
  }: Props = $props();

  const radius = size/2;
  let pointerActive: boolean = false;
  // TODO: get input_mapping from store/add defaults, add register function
  // match data from config file with VirtualJoysticks
  let input_mapping:VirtualJoystickInput = {
    name,
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
  };
  $virtual_joystick_inputs.push(input_mapping);

  // if the user uses a touch, mouse or keyboard input device
  // we disable the gamepad
  let gamepadActive = true;
  let opacity = $state(defaultOpacity);

  function onpointermove(evt: MouseEvent) {
    if (!input_mapping.gamepad || !pointerActive || !evt.target) {
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
    if (Math.abs(xcoord) < input_mapping.deadzoneX && 
        Math.abs(ycoord) < input_mapping.deadzoneY) {
      position = [0, 0];
      opacity = defaultOpacity;
      return;
    }
    opacity = activeOpacity;
    position = [xcoord, ycoord]
  }

  export function update(pos: [x: number, y: number]) {
    // get position values from another external source.
    // make sure x and y are valid in your own code.
    // take a look at the onpointermove-function on how
    // to clamp and validate your coordinates.
    position = pos;
  }

  function reset() {
    pointerActive = false;
    opacity = defaultOpacity;
    position = [0, 0]
  }

  function gamepad_update(gamepad: Gamepad) {
    if (pointerActive || !gamepadActive) {
      return;
    }
    if (input_mapping.gamepad === -1 || gamepad.index === input_mapping.gamepad) {
      let xcoord = gamepad.axes[input_mapping.axes_x];
      let ycoord = gamepad.axes[input_mapping.axes_y];
      if (input_mapping.invert_x) {
        xcoord = -xcoord;
      }
      if (input_mapping.invert_y) {
        ycoord = -ycoord;
      }
      if (Math.abs(xcoord) < input_mapping.deadzoneX && 
          Math.abs(ycoord) < input_mapping.deadzoneY) {
        opacity = defaultOpacity;
        position = [0, 0]
        return;
      }
      opacity = activeOpacity;
      position = [xcoord, ycoord];
    }
  }

  function key_update(event: KeyboardEvent) {
    let down = false;
    if (input_mapping.key_x_pos == event.key) {
      if (event.type == 'keydown') {
        down = true;
        position[0] = 1;
      } else {
        position[0] = 0;
      }
    }
    if (input_mapping.key_x_neg == event.key) {
      if (event.type == 'keydown') {
        down = true;
        position[0] = -1;
      } else {
        position[0] = 0;
      }
    }
    if (input_mapping.key_y_pos == event.key) {
      if (event.type == 'keydown') {
        down = true;
        position[1] = 1;
      } else {
        position[1] = 0;
      }
    }
    if (input_mapping.key_y_neg == event.key) {
      if (event.type == 'keydown') {
        down = true;
        position[1] = -1;
      } else {
        position[1] = 0;
      }
    }
    gamepadActive = !down;
    opacity = down ? activeOpacity : defaultOpacity;
    position = position;
  }

  onMount(() => {
    $gamepad_listener = [...$gamepad_listener, gamepad_update];
    $keyboard_listener = [...$keyboard_listener, key_update];
  });
</script>

<svelte:window on:pointerup={reset} />

<div id="joystick_area"
    style:background-color={background}
    style:width={backgroundWidth + 'px'}
    style:height={backgroundHeight + 'px'}
    onpointerdown={(e) => {
      // |capture|stopPropagation|nonpassive
      e.stopImmediatePropagation();
      pointerActive = true;
      onpointermove(e)}}
    onpointerup={(e) => {
      gamepadActive = true;
    }}
    onpointermove={onpointermove}
    ontouchstart={() => {}}
    ontouchend={() => {
      gamepadActive = true;
    }}
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
