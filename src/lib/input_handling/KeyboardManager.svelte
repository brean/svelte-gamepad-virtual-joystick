<script lang="ts">
    import type KeyboardInputHandler from "./KeyboardInputHandler.js";

  let keyDown: {[code: string]: boolean} = {}
  let inputHandler: KeyboardInputHandler[] = [];

  // press once (behaves different then "press" in Firefox which is called all the time while the button is pressed)
  let keypress = (event: KeyboardEvent) => {
    for (let handler of inputHandler) {
      if (handler.onkeypressed(event) === true) {
        break;
      }
    };
  }

  // press and hold the key (repeats while the button is pressed)
  let keydown = (event: KeyboardEvent) => {
    if (!keyDown[event.key]) {
      keypress(event);
    }
    keyDown[event.key] = true;
    inputHandler.forEach((handler) => {
      handler.onkeyhold(event);
    })
  }

  let release = (event: KeyboardEvent) => {
    delete keyDown[event.key];
    inputHandler.forEach((handler) => {
      handler.onkeyrelease(event);
    })
  }

</script>

<svelte:window
    onkeydown={keydown}
    onkeyup={release} />
