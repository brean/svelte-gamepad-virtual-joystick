<script lang="ts">
  import { onkeypressed, onkeyrelease, onkeyhold } from '$lib/store/keyboard_callbacks.svelte.js'

  let keyDown: {[code: string]: boolean} = {}

  // press once (behaves different then "press" in Firefox which is called all the time while the button is pressed)
  let keypress = (event: KeyboardEvent) => {
    for (let cb of onkeypressed) {
      if (cb(event) === true) {
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
    onkeyhold.forEach((cb) => {
      cb(event);
    })
  }

  let release = (event: KeyboardEvent) => {
    delete keyDown[event.key];
    onkeyrelease.forEach((cb) => {
      cb(event);
    })
  }

</script>

<svelte:window
    onkeydown={keydown}
    onkeyup={release} />
