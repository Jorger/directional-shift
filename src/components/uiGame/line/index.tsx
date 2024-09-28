import "./styles.css";
import { ELineScale, LINE_SIZE } from "../../../utils/constants";
import React from "react";
import type { Iline } from "../../../interfaces";

interface LineProps extends Iline {
  isEditor?: boolean;
  isSelected?: boolean;
  highlight?: boolean;
  onSelect?: (index: number) => void;
}

const Line = ({
  isEditor = false,
  index = 0,
  coordinate,
  height = LINE_SIZE,
  width = LINE_SIZE,
  transform,
  value = 1,
  isSelected = false,
  highlight = false,
  onSelect,
}: LineProps) => {
  let className = `line ${
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

  if (isEditor) {
    className += `${isSelected ? " selected" : ""}${
      highlight ? " highlight" : ""
    }`;

    return (
      <button
        className={className}
        style={style}
        onClick={() => onSelect && onSelect(index)}
      />
    );
  }

  return <div className={className} style={style} />;
};

export default React.memo(Line);
