// based on https://github.com/yoannmoinet/nipplejs/blob/master/src/utils.js

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