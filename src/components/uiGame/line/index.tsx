import "./styles.css";
import { ELineScale, LINE_SIZE } from "../../../utils/constants";
import React from "react";
import type { ICoordinate, ILineTranform } from "../../../interfaces";

interface LineProps {
  coordinate: ICoordinate;
  height: number;
  width: number;
  transform: ILineTranform;
  value?: number;
}

const Line = ({
  coordinate,
  height = LINE_SIZE,
  width = LINE_SIZE,
  transform,
  value = 1,
}: LineProps) => {
  const className = `line ${
    transform.scale === ELineScale.scaleX ? "horizontal" : "vertical"
  }`;

  const style: React.CSSProperties = {
    height,
    left: coordinate.x,
    top: coordinate.y,
    transform: `${transform.scale}(${value})`,
    transformOrigin: transform.origin,
    width,
  };

  return <div className={className} style={style} />;
};

export default React.memo(Line);
