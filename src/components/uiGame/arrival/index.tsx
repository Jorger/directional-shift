import "./styles.css";
import React from "react";
import type { ICoordinate } from "../../../interfaces";

interface ArrivalProps {
  coordinate: ICoordinate;
}

const Arrival = ({ coordinate = { x: 0, y: 0 } }: ArrivalProps) => (
  <div className="arrival" style={{ left: coordinate.x, top: coordinate.y }} />
);

export default React.memo(Arrival);
