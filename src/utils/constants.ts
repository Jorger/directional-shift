import {
  IAnimate,
  IGameOver,
  IOptionsGame,
  TAngleOrietantion,
} from "../interfaces";

export const BASE_HEIGHT = 732;
export const BASE_WIDTH = 412;
export const ARROW_SIZE = 52;
export const LINE_SIZE = Math.round(ARROW_SIZE * 0.08);
export const STOPPER_SIZE = Math.round(ARROW_SIZE * 0.25);
export const WAIT_SHOW_MODAL_GAME_OVER = 500;
export const SPEED = 300;
export const SPEED_ROTATION = SPEED / 2;

export enum EOrietantation {
  BOTTOM = "BOTTOM",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  TOP = "TOP",
}

export enum ETypeActionGame {
  RESTART = "RESTART",
  NEXTLEVEL = "NEXTLEVEL",
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
  // reachesTarget: false,
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

export const INITIAL_DATA_GAME_OVER: IGameOver = {
  isGameOver: false,
  showModal: false,
  isSucces: false,
};

export const MODAL_LABELS = {
  gameOver: [
    "Don't Give Up!",
    "Almost got It!",
    "Leeroy Jenkins!",
    "Losing streak",
    "I need vacation",
    "Sayonara",
    "Shape up",
    "Now it's personal",
    "I will have my vengance",
    "Houston, we have a problem",
    "No pain, no gain",
    "Darkest before dawn",
    "Don't try this at home",
    "Don't go there",
    "Spilled milk",
    "Tearing me apart",
    "To make matters worse",
  ],
  completed: [
    "Wonderful Victory",
    "You complete me",
    "Miracle",
    "Survivor",
    "Look at me",
    "Me, winning",
    "Cinderella story",
    "I did that",
    "Ain't heard nothing yet",
    "As planned",
    "Woot",
    "Dexterity 100",
    "Me, winning",
    "I'm on fire",
    "For a fact",
    "Pro gamer",
    "Carpe diem",
    "All in a day's work",
    "To infinity",
    "Perfection",
    "Sanity restored",
    "Got a good hand",
    "Piece of cake",
  ],
};

export const GAME_INSTRUCTION = `Don't collide. Move in the correct order.`;

/**
 * Configración para el componente de confetti
 */
export const CONFETTI_CONFIGURATION = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 80,
  dragFriction: 0.12,
  duration: 7000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

export const ROUTES = {
  LOBBY: "/",
  LEVELS: "/levels",
  ABOUT: "/about",
};

export enum EOptionsGame {
  SOUND = "SOUND",
  MUSIC = "MUSIC",
}

export const INITIAL_OPTIONS_GAME: IOptionsGame = {
  [EOptionsGame.SOUND]: true,
  [EOptionsGame.MUSIC]: true,
};

export enum ESounds {
  GAMER_OVER = "GAMER_OVER",
  CLICK = "CLICK",
}

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

document.documentElement.style.setProperty("--speed", `${SPEED}ms`);
document.documentElement.style.setProperty(
  "--speed-rotation",
  `${SPEED_ROTATION}ms`
);
