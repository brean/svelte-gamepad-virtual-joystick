// list of functions that getting called when a gamepad value changes
import { writable } from 'svelte/store';

export const gamepad_listener = writable<((gamepad: Gamepad) => void)[]>([]);
