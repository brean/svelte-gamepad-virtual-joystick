<script lang="ts">
  export let touchOnly=false; // only accept touch-events, no joystick
  export let axis=0; //the axis we listen on from the real joystick
  export let gamepadIndex=-1; //-1 means we accept all gamepads
  export let size = 100;
  export let backgroundWidth = 200;
  export let backgroundHeight = 200;
  export let color = 'rgb(106, 191, 163)'; // default color for the joystick, ABISKO_GREEN
  export let background = 'rgb(215, 219, 221)' // default color for the background, MOON_GREY

  // TODO: control by touch/mouse
  // TODO: control by gamepad
  // TODO: fade in/out animation
  // TODO: alternative icons/images
</script>

<div id="joystick_area"
    style:background-color={background}
    style:width={backgroundWidth + 'px'}
    style:height={backgroundHeight + 'px'}
  >
  <div class="joystick_container"
    style:left={((backgroundWidth - size) / 2) + 'px'}
    style:top={((backgroundHeight - size) / 2) + 'px'}
  >
    <div class="joystick_back"
      style:width={size + 'px'}
      style:height={size + 'px'}
      style:background={color}
    ></div>
    <div class="joystick_front"
      style:left={0 + 'px'}
      style:right={0 + 'px'}
      style:transition={'none'}
      style:width={(size / 2) + 'px'}
      style:height={(size / 2) + 'px'}
      style:margin-top={(size / 4) + 'px'}
      style:margin-left={(size / 4) + 'px'}
      style:background={color}
    ></div>
  </div>
</div>

<style>
  .joystick_container {
    position: relative;
  }

  .joystick_back {
    position: absolute;
    display: block;
    margin-left: 0px;
    margin-top: 0px;
    opacity: 0.5;
    border-radius: 50%;
  }

  .joystick_front {
    position: absolute;
    display: block;
    opacity: 0.5;
    border-radius: 50%;
    
  }
</style>