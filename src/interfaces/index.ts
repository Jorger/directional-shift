import {
  ELineOrigin,
  ELineScale,
  EOrietantation,
  EStateArrow,
} from "../utils/constants";

export type TOrietantation = keyof typeof EOrietantation;
export type TLineScale = keyof typeof ELineScale;
export type TLineOrigin = keyof typeof ELineOrigin;
export type TStateArrow = keyof typeof EStateArrow;

export interface ILineTranform {
  scale: TLineScale;
  origin: TLineOrigin;
}

export interface ICoordinate {
  x: number;
  y: number;
}

export interface IArrow {
  index: number;
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
}

export interface IArrival {
  index?: number;
  coordinate: ICoordinate;
}

export interface IStopper {
  index?: number;
  coordinate: ICoordinate;
}
