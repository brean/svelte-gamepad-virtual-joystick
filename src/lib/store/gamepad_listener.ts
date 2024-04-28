import { writable } from 'svelte/store';

export const gamepad_listener = writable<((gamepad: Gamepad) => void)[]>([]);
