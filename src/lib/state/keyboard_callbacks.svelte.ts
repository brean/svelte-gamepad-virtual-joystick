// pressed once
export const onkeypressed = $state<((event: KeyboardEvent) => void | boolean)[]>([]);
// key pressed and hold
export const onkeyhold = $state<((event: KeyboardEvent) => void | boolean)[]>([]);
export const onkeyrelease = $state<((event: KeyboardEvent) => void | boolean)[]>([]);
