export const BASE_HEIGHT = 732;
export const BASE_WIDTH = 412;
export const ARROW_SIZE = 60;
export const LINE_SIZE = Math.round(ARROW_SIZE * 0.08);
export const STOPPER_SIZE = Math.round(ARROW_SIZE * 0.25);

export enum EOrietantation {
  BOTTOM = "BOTTOM",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  TOP = "TOP",
}

export enum ELineScale {
  scaleX = "scaleX",
  scaleY = "scaleY",
}

export enum ELineOrigin {
  left = "left",
  right = "right",
  top = "top",
  bottom = "bottom",
}

// Variables CSS globales del juego...
document.documentElement.style.setProperty("--base-height", `${BASE_HEIGHT}px`);
document.documentElement.style.setProperty("--base-width", `${BASE_WIDTH}px`);
document.documentElement.style.setProperty("--arrow-size", `${ARROW_SIZE}px`);
document.documentElement.style.setProperty(
  "--arrow-f-size",
  `${Math.round(ARROW_SIZE * 0.8)}px`
);

document.documentElement.style.setProperty(
  "--arrow--shadow-1",
  `${Math.round(ARROW_SIZE * 0.03)}px`
);

document.documentElement.style.setProperty(
  "--arrow--shadow-2",
  `${Math.round(ARROW_SIZE * 0.06)}px`
);

document.documentElement.style.setProperty("--line-size", `${LINE_SIZE}px`);
document.documentElement.style.setProperty(
  "--stopper-size",
  `${STOPPER_SIZE}px`
);
