<script lang="ts">
  import type ButtonInput from "$lib/models/ButtonInput.js";
  import { onMount, type Snippet } from "svelte";
  import { inputs } from '$lib/state/inputs.svelte.js';
  import { thisGamepad } from '$lib/utils.js';
  import KeyboardInputHandler from "$lib/input_handling/KeyboardInputHandler.js";
    import { handler } from "$lib/state/handler.svelte.js";
    import GamepadInputHandler from "$lib/input_handling/GamepadInputHandler.js";

  interface Props {
    children: Snippet,
    disabled?: boolean
    onpressed?: (() => void),
    onhold?: (() => void),
    onrelease?: (() => void),
    pressed?: boolean,
    input_mapping?: ButtonInput
    context?: string[]
  }

  let {
    children,
    disabled = false,
    onpressed = undefined,  // only once when the pressed-state changes
    onhold = undefined,   // every event while the button is pressed
    onrelease = undefined,
    pressed = $bindable(false),
    input_mapping = {
      name: '',
      gamepad: -1,
      buttons: [0],
      keys: ['e', ' ']
    },
    context = ['default']
  }: Props = $props();

  const _onpressed = () => {
    if (disabled) {
      return;
    }
    pressed = true;
    if (onpressed) {
      onpressed();
    }
  }

  const _onhold = () => {
    if (!disabled && onhold) {
      onhold();
    }
  }

  const _onrelease = () => {
    pressed = false;
    if (onrelease) {
      onrelease();
    }
  }

  class ButtonKeyboardInput extends KeyboardInputHandler {
    thisKey(event: KeyboardEvent): boolean {
      return (this.input as ButtonInput).keys.indexOf(event.key) > -1
    }

    onkeypressed(event: KeyboardEvent): boolean {
      _onpressed();
      return super.onkeypressed(event);
    }

    onkeyhold(event: KeyboardEvent): void {
      _onhold();
    }

    onkeyrelease(event: KeyboardEvent): void {
      _onrelease();
    }
  }

  class ButtonGamepadInput extends GamepadInputHandler {
    thisGamepadButton(gamepad: Gamepad, btn: number): boolean {
      return super.thisGamepadButton(gamepad, btn) && 
        (this.input as ButtonInput).buttons.indexOf(btn) > -1
    }

    onbuttonpressed(gamepad: Gamepad, btn: number): boolean {
      _onpressed();
      return super.onbuttonpressed(gamepad, btn);
    }

    onbuttonhold(gamepad: Gamepad, btn: number): void {
      _onhold();
    }

    onbuttonrelease(gamepad: Gamepad, btn: number): void {
      _onrelease();
    }
  }

  onMount(() => {
    const btn = new ButtonKeyboardInput(input_mapping);
    const gp = new ButtonGamepadInput(input_mapping);
    context.forEach((ctx) => {
      if (!handler.keyboard[ctx]) {
        handler.keyboard[ctx] = [];
      }
      handler.keyboard[ctx].push(btn);

      if (!handler.gamepad[ctx]) {
        handler.gamepad[ctx] = [];
      }
      handler.gamepad[ctx].push(gp)
    });
    inputs.buttons.push(input_mapping);

    return () => {
      // cleanup on destroy
      // unregister configuration
      inputs.buttons.splice(inputs.buttons.indexOf(input_mapping), 1);
      context.forEach((ctx) => {
        if (handler.keyboard[ctx]) {
          handler.keyboard[ctx].splice(handler.keyboard[ctx].indexOf(btn), 1);
        }
        if (handler.gamepad[ctx]) {
          handler.gamepad[ctx].splice(handler.gamepad[ctx].indexOf(gp), 1);
        }
      });
    }
  });
</script>

{@render children?.()}