import "./styles.css";
import { EOrietantation } from "../../../utils/constants";
import type { ICoordinate, TOrietantation } from "../../../interfaces";

interface ArrowProps {
  index: number;
  orientation: TOrietantation;
  coordinate: ICoordinate;
  rotation?: number;
  finished?: boolean;
  disabled?: boolean;
  onSelect: (index: number) => void;
}

const Arrow = ({
  index = 0,
  orientation = EOrietantation.RIGHT,
  coordinate = { x: 0, y: 0 },
  rotation = 0,
  finished = false,
  disabled = false,
  onSelect,
}: ArrowProps) => {
  const className = `arrow ${orientation.toLowerCase()} ${
    finished ? "finished" : ""
  }`;

  const style: React.CSSProperties = {
    left: coordinate.x,
    top: coordinate.y,
    rotate: `${rotation}deg`,
  };

  return (
    <button
      className={className}
      style={style}
      disabled={disabled}
      onClick={() => onSelect(index)}
    />
  );
};

export default Arrow;
