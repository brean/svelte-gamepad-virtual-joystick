// Reexport your entry components here
import GamepadManager from "./components/GamepadManager.svelte";
import KeyboardManager from "./components/KeyboardManager.svelte";
import VirtualJoystick from "./components/VirtualJoystick.svelte";
import VirtualButton from "./components/VirtualButton.svelte";
import ButtonBase from "./components/ButtonBase.svelte";
import VirtualList from "./components/VirtualList.svelte";

import type VirtualJoystickInput from "./models/VirtualJoystickInput.js";
import type VirtualButtonInput from "./models/VirtualButtonInput.js";
import type VirtualListInput from "./models/VirtualListInput.js";

import '$lib/store/gamepad_callbacks.svelte.js'
import '$lib/store/keyboard_callbacks.svelte.js'
import '$lib/store/virtual_input.svelte.js'

import { distance, angle, findCoord, radians, degrees, clamp } from './utils.js';
export { 
    GamepadManager, KeyboardManager, VirtualButton, VirtualJoystick, VirtualList, ButtonBase,
    distance, angle, findCoord, radians, degrees, clamp };
export type {VirtualButtonInput, VirtualJoystickInput, VirtualListInput}