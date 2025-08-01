// Reexport your entry components here
import InputManager from "./input_handling/InputManager.svelte";
import InputComponent from "./input_handling/InputComponent.js";

import Joystick from "./components/Joystick.svelte";
import Button from "./components/Button.svelte";
import List from "./components/List.svelte";
import Slider from "./components/Slider.svelte";
import Icon from "./components/Icon.svelte";
import VirtualButton from "./components/VirtualButton.svelte";

import ButtonInputComponent from "./input_handling/ButtonInputComponent.js"
import JoystickInputComponent from "./input_handling/JoystickInputComponent.js";
import ListInputComponent from "./input_handling/ListInputComponent.js"
import SliderInputComponent from "./input_handling/SliderInputComponent.js"

import type Input from "./models/Input.js";
import type JoystickInput from "./models/JoystickInput.js";
import type ButtonInput from "./models/ButtonInput.js";
import type ListInput from "./models/ListInput.js";

import '$lib/state/handler.svelte.js';
import '$lib/state/inputs.svelte.js';

import { distance, angle, findCoord, radians, degrees, clamp } from './utils.js';
export { 
    InputManager, 
    InputComponent,
    Button, Joystick, List, Slider,
    Icon, VirtualButton,
    ButtonInputComponent, ListInputComponent, SliderInputComponent,
    JoystickInputComponent,
    distance, angle, findCoord, radians, degrees, clamp };
export type { Input, ButtonInput, JoystickInput, ListInput };