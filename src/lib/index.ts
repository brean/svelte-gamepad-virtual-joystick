// Reexport your entry components here
import GamepadManager from "./components/GamepadManager.svelte";
import KeyboardManager from "./components/KeyboardManager.svelte";
import Joystick from "./components/Joystick.svelte";
import Button from "./components/Button.svelte";
import ButtonBase from "./components/ButtonBase.svelte";
import ListBase from "./components/ButtonBase.svelte";
import List from "./components/List.svelte";

import type Input from "./models/Input.js";
import type JoystickInput from "./models/JoystickInput.js";
import type ButtonInput from "./models/ButtonInput.js";
import type ListInput from "./models/ListInput.js";

import '$lib/store/gamepad_callbacks.svelte.js'
import '$lib/store/keyboard_callbacks.svelte.js'
import '$lib/store/inputs.svelte.js'

import { distance, angle, findCoord, radians, degrees, clamp } from './utils.js';
export { 
    GamepadManager, KeyboardManager, 
    ButtonBase, ListBase,
    Button, Joystick, List,
    distance, angle, findCoord, radians, degrees, clamp };
export type {Input, ButtonInput, JoystickInput, ListInput}