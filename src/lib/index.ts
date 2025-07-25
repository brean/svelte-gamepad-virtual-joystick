// Reexport your entry components here
import GamepadManager from "./input_handling/GamepadManager.svelte";
import KeyboardManager from "./input_handling/KeyboardManager.svelte";
import GamepadInputHandler from "./input_handling/GamepadInputHandler.js";
import KeyboardInputHandler from "./input_handling/KeyboardInputHandler.js";
import Joystick from "./components/Joystick.svelte";
import Button from "./components/Button.svelte";
import ButtonBase from "./components/ButtonBase.svelte";
import ListBase from "./components/ListBase.svelte";
import List from "./components/List.svelte";
import SliderBase from "./components/SliderBase.svelte";
import Slider from "./components/Slider.svelte";

import type Input from "./models/Input.js";
import type JoystickInput from "./models/JoystickInput.js";
import type ButtonInput from "./models/ButtonInput.js";
import type ListInput from "./models/ListInput.js";

import '$lib/state/handler.svelte.js';
import '$lib/state/inputs.svelte.js';

import { distance, angle, findCoord, radians, degrees, clamp } from './utils.js';
export { 
    GamepadManager, KeyboardManager, 
    GamepadInputHandler, KeyboardInputHandler,
    ButtonBase, ListBase,
    Button, Joystick, List,
    distance, angle, findCoord, radians, degrees, clamp };
export type {Input, ButtonInput, JoystickInput, ListInput}