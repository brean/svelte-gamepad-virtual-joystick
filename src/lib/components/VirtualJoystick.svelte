<script lang="ts">
  import { angle, distance, clamp, findCoord } from "$lib/utils.js";
  import { gamepad_listener } from "$lib/store/gamepad_listener.js";
  import { onMount } from "svelte";

  export let touchOnly=false; // only accept touch-events, no joystick
  export let gamepadOnly=false; // only gamepad, no touch
  export let xaxes=0; //the axis we listen on from the real joystick
  export let yaxes=1; //the axis we listen on from the real joystick
  export let gamepadIndex=-1; //-1 means we accept all gamepads
  export let size = 100;
  export let backgroundWidth = 200;
  export let backgroundHeight = 200;
  export let deadzoneX = 0.05;
  export let deadzoneY = 0.05;
  export let color = 'rgb(106, 191, 163)'; // default color for the joystick, ABISKO_GREEN
  export let background = 'rgb(215, 219, 221)' // default color for the background, MOON_GREY
  export let defaultOpacity: number = 0.5;
  export let activeOpacity: number = 0.8;
  export let border: number = 1;
  export let borderColor: string = 'black'
  const radius = size/2;
  let pointerActive: boolean = false;
  // position is the relative position of the pad on the stick, between -1 and 1.
  let position: [x: number, y: number] = [0, 0];
  let opacity = defaultOpacity;

  function onpointermove(evt) {
    if (gamepadOnly || !pointerActive) {
      return
    }
    opacity = activeOpacity;
    const rect = evt.target.getBoundingClientRect();
    const mouseX = evt.x - rect.x;
    const mouseY = evt.y - rect.y;

    // get relative position or the pointer from the 
    // center of the joystick area
    let x = (mouseX - (backgroundWidth / 2));
    let y = (mouseY - (backgroundHeight / 2));
    
    // distance of touched point from the center
    const raw_dist = distance(x, y)
    const a = angle(x, y)

    let dist = clamp(raw_dist, radius);
    let coords = findCoord(dist, a);
    // normalize corrds
    let xcoord = coords[0] / radius
    let ycoord = coords[1] / radius
    if (Math.abs(xcoord) < deadzoneX && 
        Math.abs(ycoord) < deadzoneY) {
      position = [0, 0]
      return;
    }
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
    if (pointerActive) {
      return;
    }
    if (gamepadIndex === -1 || gamepad.index === gamepadIndex) {
      let xcoord = gamepad.axes[xaxes];
      let ycoord = gamepad.axes[yaxes];
      if (Math.abs(xcoord) < deadzoneX && 
          Math.abs(ycoord) < deadzoneY) {
        position = [0, 0]
        return;
      }
      position = [xcoord, ycoord];
    }
  }

  onMount(() => {
    if (touchOnly) {
      return;
    }
    $gamepad_listener = [...$gamepad_listener, gamepad_update];
  });
</script>

<svelte:window on:pointerup={reset} />

<div id="joystick_area"
    style:background-color={background}
    style:width={backgroundWidth + 'px'}
    style:height={backgroundHeight + 'px'}
    on:pointerdown={(e) => {
      pointerActive = true;
      onpointermove(e)}}
    on:pointermove={onpointermove}
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
      style:border={border > 0 ? border + 'px solid ' + borderColor : 0}
      style:transition={'none'}
      style:width={(radius) + 'px'}
      style:height={(radius) + 'px'}
      style:margin-top={(radius / 2) + 'px'}
      style:margin-left={(radius / 2) + 'px'}
      style:background={color}
      style:opacity={opacity}
    ></div>
  </div>
</div>

<style>
  .joystick_container {
    position: relative;
  }

  .joystick_back {
    pointer-events: none;
    position: absolute;
    display: block;
    margin-left: 0px;
    margin-top: 0px;
    border-radius: 50%;
  }

  .joystick_front {
    pointer-events: none;
    position: absolute;
    display: block;
    border-radius: 50%;
    
  }
</style>
