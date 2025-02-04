import type VirtualButtonInput from "$lib/models/VirtualButtonInput.js"
import type VirtualJoystickInput from "$lib/models/VirtualJoystickInput.js"
import type VirtualListInput from "$lib/models/VirtualListInput.js"

export const virtual_inputs = $state<{
  buttons: VirtualButtonInput[],
  joysticks: VirtualJoystickInput[],
  lists: VirtualListInput[]
}>({
  buttons: [],
  joysticks: [],
  lists: []
})