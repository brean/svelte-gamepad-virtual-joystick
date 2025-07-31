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

function getNextElement(direction: 1 | -1): HTMLElement | undefined {
  const currentElement = document.activeElement;
  const focusableElements = Array.from(document.querySelectorAll('input, select, textarea, button, [tabindex]:not([tabindex="-1"])'));
  if (!currentElement) {
    return
  }
  let currentIndex = focusableElements.indexOf(currentElement);
  for (let i = 1; i < focusableElements.length; i++) {
    let index = (currentIndex + (i * direction)) % focusableElements.length;
    if (index < 0) {
      index = focusableElements.length -1;
      currentIndex = index;
    }
    const elem = focusableElements[index] as HTMLElement;
    if (!elem.hasAttribute('disabled')) {
      return elem;
    }
  }
  
}

export function focusPreviousElement() {
  // Get the currently focused element
  const previousElement = getNextElement(-1);
  if (previousElement) {
    previousElement.focus();
  }
}

export function focusNextElement() {
  // Get the currently focused element
  const nextElement = getNextElement(1);
  if (nextElement) {
    nextElement.focus();
  }
}