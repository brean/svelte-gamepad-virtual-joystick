<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { angle, distance, clamp, findCoord } from "$lib/utils.js";
  import { cubicOut } from 'svelte/easing';

  export let touchOnly=false; // only accept touch-events, no joystick
  export let gamepadOnly=false; // only gamepad, no touch
  export let axis=0; //the axis we listen on from the real joystick
  export let gamepadIndex=-1; //-1 means we accept all gamepads
  export let size = 100;
  export let backgroundWidth = 200;
  export let backgroundHeight = 200;
  export let color = 'rgb(106, 191, 163)'; // default color for the joystick, ABISKO_GREEN
  export let background = 'rgb(215, 219, 221)' // default color for the background, MOON_GREY
  export let defaultOpacity: number = 0.5;
  export let activeOpacity: number = 0.8;
  export let border: number = 1;
  export let borderColor: string = 'black'
  const radius = size/2;
  let pointerActive: boolean = false
  let position: [x: number, y: number] = [0, 0];
  let opacity = defaultOpacity;

  // TODO: control by gamepad
  // TODO: fade in/out animation
  // TODO: alternative icons/images

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
    position = [coords[0] / radius, -coords[1] / radius]
  }

  function update() {
    // translate position values to 
  }

  function reset() {
    pointerActive = false;
    opacity = defaultOpacity;
    position = [0, 0]
  }
</script>

<svelte:window on:pointerup={reset} />

<div id="joystick_area"
    style:background-color={background}
    style:width={backgroundWidth + 'px'}
    style:height={backgroundHeight + 'px'}
    on:pointerdown={() => {pointerActive = true}}
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
      style:top={-position[1] * radius + 'px'}
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