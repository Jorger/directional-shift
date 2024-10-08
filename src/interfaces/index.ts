import {
  ELineFinish,
  ELineOrigin,
  ELineScale,
  EOptionsGame,
  EOrietantation,
  ESounds,
  EStateArrow,
  ETypeActionGame,
  ETypeAnimation,
} from "../utils/constants";

export type TOrietantation = keyof typeof EOrietantation;
export type TLineScale = keyof typeof ELineScale;
export type TLineOrigin = keyof typeof ELineOrigin;
export type TStateArrow = keyof typeof EStateArrow;
export type TLineFinish = keyof typeof ELineFinish;
export type TTypeAnimation = keyof typeof ETypeAnimation;
export type TTypeActionGame = keyof typeof ETypeActionGame;
export type IEOptionsGame = keyof typeof EOptionsGame;
export type IESounds = keyof typeof ESounds;

export interface ILineTranform {
  scale: TLineScale;
  origin: TLineOrigin;
}

export interface ICoordinate {
  x: number;
  y: number;
}

export interface IArrow {
  index?: number;
  orientation: TOrietantation;
  coordinate: ICoordinate;
  state: TStateArrow;
  rotation: number;
}

export interface Iline {
  index?: number;
  coordinate: ICoordinate;
  height: number;
  width: number;
  transform: ILineTranform;
  value: number;
  finish: TLineFinish;
  // Para quitar el elemento del dom
  visible?: boolean;
  // indexArrow?: number;
  // fullStop: ICoordinate;
}

export interface IArrival {
  index?: number;
  coordinate: ICoordinate;
}

export interface IStopper {
  index?: number;
  coordinate: ICoordinate;
  // Se quita del dom cuando no es necesario...
  visible?: boolean;
  indexLine?: number;
}

export interface ITargetPositions {
  coordinate: ICoordinate;
  orientation: TOrietantation;
}

export interface IPathArrow {
  arrow: IArrow;
  indexLines: number[];
  targetPositions: ITargetPositions[];
  // Creo que indexArrival ya no se va a necesitar...
  indexArrival: number;
  counterTarget?: number;
  // Para saber si el arrow ha llegado a su destino...
  arrivesDestination?: boolean;
}

export interface ILevel {
  arrows: IPathArrow[];
  lines: Iline[];
  stoppers: IStopper[];
  arrivals: IArrival[];
}

export interface IAnimate {
  isAnimate: boolean;
  typeAnimation: TTypeAnimation;
  arrowIndex: number;
  isCollision: boolean;
  // reachesTarget: boolean;
  animationRef: React.RefObject<HTMLButtonElement> | null;
}

export type TValueOrientation = Record<TOrietantation, number>;
export type TAngleOrietantion = Record<TOrietantation, TValueOrientation>;

export interface IGameOver {
  isGameOver: boolean;
  showModal: boolean;
  isSucces: boolean;
}

/**
 * Para las opciones del juego...
 */
export type IOptionsGame = Record<IEOptionsGame, boolean>;
export interface IOptionsContext {
  optionsGame: IOptionsGame;
  toogleOptions: (type: IEOptionsGame) => void;
  playSound: (type: IESounds) => void;
}

/**
 * Tipo para el serviworker
 */
export interface IServiceWorker {
  serviceWorkerInitialized?: boolean;
  serviceWorkerUpdated?: boolean;
  serviceWorkerRegistration?: ServiceWorkerRegistration;
}
