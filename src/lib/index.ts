// Reexport your entry components here

// constants
import GamepadButtons from "./constants/GamepadButtons.js"

// Basics
import InputManager from "./input_handling/InputManager.svelte";
import InputComponent from "./input_handling/InputComponent.js";

// Input Components
import ButtonInputComponent from "./input_handling/ButtonInputComponent.js"
import JoystickInputComponent from "./input_handling/JoystickInputComponent.js";
import ListInputComponent from "./input_handling/ListInputComponent.js"
import SliderInputComponent from "./input_handling/SliderInputComponent.js"

// Implemented components using basic HTML elements
import Button from "./components/Button.svelte";
import Joystick from "./components/Joystick.svelte";
import List from "./components/List.svelte";
import Slider from "./components/Slider.svelte";
import VirtualButton from "./components/VirtualButton.svelte";

import Hint from "./components/Hint.svelte";
import Icon from "./components/Icon.svelte";

// states
import { component_state, registerComponent, unregisterComponent } from '$lib/state/components.svelte.js';

// utils
import { 
    distance, angle, findCoord, radians, degrees, clamp,
    focusNextElement, focusPreviousElement } from './utils.js';

// models
import type Input from "./models/Input.js";
import type ButtonInput from "./models/ButtonInput.js";
import type JoystickInput from "./models/JoystickInput.js";
import type ListInput from "./models/ListInput.js";
import type SliderInput from "./models/SliderInput.js";

export { 
    // constants
    GamepadButtons,
    // basics
    InputManager, InputComponent,
    // Input Components (typescript classes)
    ButtonInputComponent, JoystickInputComponent, 
    ListInputComponent, SliderInputComponent,
    // implemented components using basic HTML elements
    Button, Joystick, List, Slider, VirtualButton,
    // Icon and Hint
    Icon, Hint,
    // state management
    component_state, registerComponent, unregisterComponent,
    // utils
    distance, angle, findCoord, radians, degrees, clamp,
    focusNextElement, focusPreviousElement };
// models
export type { Input, ButtonInput, JoystickInput, ListInput, SliderInput };