import "./styles.css";
import type { IStopper } from "../../../interfaces";

interface StopperProps extends IStopper {
  isSelected?: boolean;
  onSelect?: (index: number) => void;
}

const Stopper = ({
  index = 0,
  isSelected = false,
  coordinate = { x: 0, y: 0 },
  onSelect,
}: StopperProps) => {
  if (onSelect) {
    return (
      <button
        className={`stopper ${isSelected ? "selected" : ""}`}
        style={{ left: coordinate.x, top: coordinate.y }}
        onClick={() => onSelect(index)}
      />
    );
  }

  return (
    <div
      className="stopper"
      style={{ left: coordinate.x, top: coordinate.y }}
    />
  );
};

export default Stopper;
