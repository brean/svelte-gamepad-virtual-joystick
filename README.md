# Svelte Gamepad and virtual JoyStick
Svelte library for complex input to your app, provides Gamepad integration with the capability to show a virtual Joystick.

The virtual Joystick can either be used as fallback when a real gamepad is not connected but a touchscreen is present, as indicator of the gamepad state or to provide a virtual joystick to the user.

Also allows keyboard inputs as fallback.

## Examples
See the [Svelte complex input example](../svelte-complex-input-example)-app for usage examples.

## Application
This library is used to reimagine the control of robotic systems but can also be useful in web game development prototyping.

## Installation
This library ~~can~~ (_should in the future be able to_) be installed with npm:
```
npm i -D svelte-gamepad-virtual-joystick
```
If you like to extend the development take a look at the [Svelte complex input example](../svelte-complex-input-example)-app how to use the development build in your project.

## Sources
based code from
 - https://github.com/arturcarvalho/svelte-gamepad/ (I first thought to just use it and updated to use vite and integrate more complex button/axis handling but I also wanted to support more than 4 gamepads, have a virtual joystick and keyboard controls so this became its own thing instead of just a fork)
 - nipple.js (nipple.js itself is not mobile compatible because it direct accesses window)


## License
BSD-3