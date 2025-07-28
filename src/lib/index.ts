// Reexport your entry components here
import InputManager from "./input_handling/InputManager.svelte";
import InputComponent from "./input_handling/InputComponent.js";

import Joystick from "./components/Joystick.svelte";
import Button from "./components/Button.svelte";
import ButtonBase from "./components/ButtonBase.svelte";
import ListBase from "./components/ListBase.svelte";
import List from "./components/List.svelte";
import SliderBase from "./components/SliderBase.svelte";
import Slider from "./components/Slider.svelte";
import Icon from "./components/Icon.svelte";
import VirtualButton from "./components/VirtualButton.svelte";

import type Input from "./models/Input.js";
import type JoystickInput from "./models/JoystickInput.js";
import type ButtonInput from "./models/ButtonInput.js";
import type ListInput from "./models/ListInput.js";

import '$lib/state/handler.svelte.js';
import '$lib/state/inputs.svelte.js';

import { distance, angle, findCoord, radians, degrees, clamp } from './utils.js';
export { 
    InputManager as GamepadManager, 
    InputComponent as GamepadInputHandler,
    ButtonBase, ListBase, SliderBase, 
    Button, Joystick, List, Slider,
    Icon, VirtualButton,
    distance, angle, findCoord, radians, degrees, clamp };
export type { Input, ButtonInput, JoystickInput, ListInput };