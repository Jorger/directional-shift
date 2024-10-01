import { IAnimate, TAngleOrietantion } from "../interfaces";

export const BASE_HEIGHT = 732;
export const BASE_WIDTH = 412;
export const ARROW_SIZE = 52;
export const LINE_SIZE = Math.round(ARROW_SIZE * 0.08);
export const STOPPER_SIZE = Math.round(ARROW_SIZE * 0.25);
export const SPEED = "500ms";

// TODO: revisar si puede ser la misma interfaz de ELineOrigin
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

// TODO: revisar si puede ser la misma interfaz de EOrietantation
export enum ELineOrigin {
  left = "left",
  right = "right",
  top = "top",
  bottom = "bottom",
}

export enum EStateArrow {
  IDLE = "IDLE",
  FINISH = "FINISH",
  COLLISION = "COLLISION",
  MOVEMENT = "MOVEMENT",
}

export enum ELineFinish {
  "NEXT" = "NEXT",
  "STOPPER" = "STOPPER",
  "ARRIVAL" = "ARRIVAL",
}

export enum ETypeAnimation {
  "MOVE" = "MOVE",
  "ROTATION" = "ROTATION",
}

export const INITIAL_ANIMATION_DATA: IAnimate = {
  isAnimate: false,
  typeAnimation: ETypeAnimation.MOVE,
  isCollision: false,
  reachesTarget: false,
  arrowIndex: -1,
  animationRef: null,
};

export const ANGLE_ORIENTATION: TAngleOrietantion = {
  BOTTOM: {
    BOTTOM: 0,
    LEFT: 90,
    RIGHT: -90,
    TOP: 0,
  },
  LEFT: {
    BOTTOM: -90,
    LEFT: 0,
    RIGHT: 0,
    TOP: 90,
  },
  RIGHT: {
    BOTTOM: 90,
    LEFT: 0,
    RIGHT: 0,
    TOP: -90,
  },
  TOP: {
    BOTTOM: 0,
    LEFT: -90,
    RIGHT: 90,
    TOP: 0,
  },
};

// Variables CSS globales del juego...
document.documentElement.style.setProperty("--base-height", `${BASE_HEIGHT}px`);
document.documentElement.style.setProperty("--base-width", `${BASE_WIDTH}px`);
document.documentElement.style.setProperty("--arrow-size", `${ARROW_SIZE}px`);
document.documentElement.style.setProperty(
  "--arrow-f-size",
  `${Math.round(ARROW_SIZE * 0.33)}px`
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

document.documentElement.style.setProperty("--speed", `${SPEED}`);
