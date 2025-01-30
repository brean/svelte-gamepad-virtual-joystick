// list of functions that getting called when a gamepad value changes
import type VirtualButtonInput from '$lib/models/VirtualButtonInput.js';
import { writable } from 'svelte/store';

export const virtual_button_inputs = writable<VirtualButtonInput[]>([]);
