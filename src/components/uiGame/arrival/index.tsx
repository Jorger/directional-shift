import "./styles.css";
import React from "react";
import type { IArrival } from "../../../interfaces";

interface ArrivalProps extends IArrival {
  isSelected?: boolean;
  highlight?: boolean;
  onSelect?: (index: number) => void;
}

const Arrival = ({
  index = 0,
  isSelected = false,
  highlight = false,
  coordinate = { x: 0, y: 0 },
  onSelect,
}: ArrivalProps) => {
  if (onSelect) {
    return (
      <button
        className={`arrival ${isSelected ? "selected" : ""} ${
          highlight ? "highlight" : ""
        }`}
        style={{ left: coordinate.x, top: coordinate.y }}
        onClick={() => onSelect(index)}
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
