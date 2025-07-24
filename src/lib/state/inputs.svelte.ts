import type ButtonInput from "$lib/models/ButtonInput.js"
import type JoystickInput from "$lib/models/JoystickInput.js"
import type ListInput from "$lib/models/ListInput.js"

export const inputs = $state<{
  buttons: ButtonInput[],
  joysticks: JoystickInput[],
  lists: ListInput[]
}>({
  buttons: [],
  joysticks: [],
  lists: []
})