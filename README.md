# Svelte Gamepad and virtual JoyStick
Svelte library for complex input to your app, provides Gamepad integration with different UI-interfaces:
 - **Button** A button that can either be pressed by touch or mouse, a key on the keyboard or a button on your gamepad
 - **Joystick** A joystick with X/Y axes that can be controlled by touch/mouse input, an analog stick of your gamepad or keyboard buttons

The virtual Joystick can either be used as fallback when a real gamepad is not connected but a touchscreen is present, as indicator of the gamepad state or to provide a virtual joystick to the user.

## Examples
See the [+page.svelte](https://github.com/brean/svelte-gamepad-virtual-joystick/blob/main/src/routes/%2Bpage.svelte) file for a basic demo.

Take a look at [SMUI Gamepad Components](https://github.com/brean/smui-gamepad-components) for an integration into [Svelte Material UI](https://sveltematerialui.com/)

## Application
This library is used to reimagine the control of robotic systems but can also be useful in web game development prototyping.

## Installation
This library can be installed using npm:
```
npm i -D svelte-gamepad-virtual-joystick
```

## Sources
based on code from
 - https://github.com/arturcarvalho/svelte-gamepad/ (I first thought to just use it and updated to use vite and integrate more complex button/axis handling but I also wanted to support more than 4 gamepads, have a virtual joystick and keyboard controls so this became its own thing instead of just a fork)
 - nipple.js (nipple.js itself is not svelte compatible because it directly accesses `window`)


## Deploy to NPM
TODO!

## License
BSD-3
