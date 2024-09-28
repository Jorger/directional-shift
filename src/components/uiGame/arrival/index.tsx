import "./styles.css";
import React from "react";
import type { IArrival } from "../../../interfaces";

interface ArrivalProps extends IArrival {
  isEditor?: boolean;
  isSelected?: boolean;
  highlight?: boolean;
  onSelect?: (index: number) => void;
}

const Arrival = ({
  index = 0,
  isEditor = false,
  isSelected = false,
  highlight = false,
  coordinate = { x: 0, y: 0 },
  onSelect,
}: ArrivalProps) => {
  if (isEditor) {
    return (
      <button
        className={`arrival ${isSelected ? "selected" : ""} ${
          highlight ? "highlight" : ""
        }`}
        style={{ left: coordinate.x, top: coordinate.y }}
        onClick={() => onSelect && onSelect(index)}
      />
    );
  }

  return (
    <div
      className="arrival"
      style={{ left: coordinate.x, top: coordinate.y }}
    />
  );
};

export default React.memo(Arrival);
