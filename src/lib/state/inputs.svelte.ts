// store to keep track of all input devices so we can address
// them in the config dialog.
// TODO: sort by groups?
import type ButtonInput from "$lib/models/ButtonInput.js"
import type JoystickInput from "$lib/models/JoystickInput.js"
import type ListInput from "$lib/models/ListInput.js"
import type SliderInput from "$lib/models/SliderInput.js"

export const inputs = $state<{
  buttons: ButtonInput[],
  joysticks: JoystickInput[],
  lists: ListInput[]
  sliders: SliderInput[]
}>({
  buttons: [],
  joysticks: [],
  lists: [],
  sliders: []
})