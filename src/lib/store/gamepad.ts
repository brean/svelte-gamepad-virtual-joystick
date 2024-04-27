import { writable } from 'svelte/store';

export const gamepad = writable<Gamepad[]>([]);
