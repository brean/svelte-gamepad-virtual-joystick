// list of functions that getting called when a button is pressed
import { writable } from 'svelte/store';

export const keyboard_listener = writable<((event: KeyboardEvent) => void)[]>([]);
