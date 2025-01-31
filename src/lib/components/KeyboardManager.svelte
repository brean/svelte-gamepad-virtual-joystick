<script lang="ts">
  import { keyboard_listener } from "$lib/store/keyboard_listener.js";

  let on_key = (event:KeyboardEvent) => {
    for (let listener of $keyboard_listener) {
      listener(event);
    }
  }
</script>

<svelte:window
    onkeydown={on_key}
    onkeyup={on_key} />
