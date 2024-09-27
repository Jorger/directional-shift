import "./styles.css";
import type { ICoordinate } from "../../../interfaces";

interface StopperProps {
  coordinate: ICoordinate;
}

const Stopper = ({ coordinate = { x: 0, y: 0 } }: StopperProps) => (
  <div className="stopper" style={{ left: coordinate.x, top: coordinate.y }} />
);

export default Stopper;
