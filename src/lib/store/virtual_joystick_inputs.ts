// list of functions that getting called when a gamepad value changes
import type VirtualJoystickInput from '$lib/models/VirtualJoystickInput.js';
import { writable } from 'svelte/store';

export const virtual_joystick_inputs = writable<VirtualJoystickInput[]>([]);
