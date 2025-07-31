// based on https://github.com/yoannmoinet/nipplejs/blob/master/src/utils.js

import type Input from "./models/Input.js";

export const distance = (dx: number, dy: number): number => {
  // returns the distance to 0:0
  return Math.sqrt(dx**2 + dy**2);
};

export const angle = (dx: number, dy: number): number => {
  // returns the angle from 0:0 to dx:dy in radians
  return Math.atan2(dy, dx);
};

export const findCoord = (d: number, a: number) => {
  return [d * Math.cos(a), d * Math.sin(a)];
};

export const radians = (a: number): number => {
    return a * (Math.PI / 180);
};

export const degrees = (a: number): number => {
    return a * (180 / Math.PI);
};

export const clamp = (distance: number, maxDist: number) => {
  return Math.min(Math.max(-maxDist, distance), maxDist)
}

export function thisGamepad(_input: Input, gamepad: Gamepad): boolean {
  //-1 means we accept all gamepads, -2 or lower means none,
  //otherwise only the specified gamepad index
  return _input.gamepad === -1 || _input.gamepad === gamepad.index;
}

export function focusNextElement() {
    // Get the currently focused element
    const currentElement = document.activeElement;
    const focusableElements = Array.from(document.querySelectorAll('input, select, textarea, button, [tabindex]:not([tabindex="-1"])'));
    if (!currentElement) {
      return
    }
    const currentIndex = focusableElements.indexOf(currentElement);
    const nextIndex = (currentIndex + 1) % focusableElements.length; // Wrap around to the first element
    const nextElement = focusableElements[nextIndex] as HTMLElement;
    if (nextElement) {
      nextElement.focus();
    } else {
      (focusableElements[0] as HTMLElement).focus();
    }
}