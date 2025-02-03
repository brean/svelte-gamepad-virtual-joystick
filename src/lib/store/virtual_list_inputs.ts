// list of functions that getting called when a gamepad value changes
import type VirtualListInput from '$lib/models/VirtualListInput.js';
import { writable } from 'svelte/store';

export const virtual_list_inputs = writable<VirtualListInput[]>([]);
