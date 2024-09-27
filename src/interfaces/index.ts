import { ELineOrigin, ELineScale, EOrietantation } from "../utils/constants";

export type TOrietantation = keyof typeof EOrietantation;
export type TLineScale = keyof typeof ELineScale;
export type TLineOrigin = keyof typeof ELineOrigin;

export interface ILineTranform {
  scale: TLineScale;
  origin: TLineOrigin;
}

export interface ICoordinate {
  x: number;
  y: number;
}
