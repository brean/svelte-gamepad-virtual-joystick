<script lang="ts">
    import { handler } from "$lib/state/handler.svelte.js";
  import type KeyboardInputHandler from "./KeyboardInputHandler.js";

  let keyDown: {[code: string]: boolean} = {}
  let context = 'default';

  // press once (behaves different then "press" in Firefox which is called all the time while the button is pressed)
  let keypress = (event: KeyboardEvent) => {
    let inputHandler: KeyboardInputHandler[] = handler.keyboard[context];
    for (let handler of inputHandler) {
      if (handler.thisKey(event) && handler.onkeypressed(event) === true) {
        break;
      }
    };
  }

  // press and hold the key (repeats while the button is pressed)
  let keydown = (event: KeyboardEvent) => {
    if (!keyDown[event.key]) {
      keypress(event);
    }
    let inputHandler: KeyboardInputHandler[] = handler.keyboard[context];
    keyDown[event.key] = true;
    inputHandler.forEach((handler) => {
      if (handler.thisKey(event)) {
        handler.onkeyhold(event);
      }
    })
  }

  let release = (event: KeyboardEvent) => {
    delete keyDown[event.key];
    let inputHandler: KeyboardInputHandler[] = handler.keyboard[context];
    inputHandler.forEach((handler) => {
      if (handler.thisKey(event)) {
        handler.onkeyrelease(event);
      }
    })
  }

</script>

<svelte:window
    onkeydown={keydown}
    onkeyup={release} />
