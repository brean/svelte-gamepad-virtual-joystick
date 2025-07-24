export const onbuttonpressed = $state<((gamepad: Gamepad, btn: number) => void | boolean)[]>([]);
export const onbuttonhold = $state<((gamepad: Gamepad, btn: number) => void | boolean)[]>([]);
export const onbuttonrelease = $state<((gamepad: Gamepad, btn: number) => void | boolean)[]>([]);
// called every frame, e.g. for axis updates
export const onupdate = $state<((gamepad: Gamepad) => void)[]>([]);