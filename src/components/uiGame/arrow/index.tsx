import "./styles.css";
import { EOrietantation, EStateArrow } from "../../../utils/constants";
import { useRef } from "react";
import type { IArrow } from "../../../interfaces";

interface ArrowProps extends IArrow {
  isSelected?: boolean;
  onSelect: (index: number, ref?: React.RefObject<HTMLButtonElement>) => void;
}

const Arrow = ({
  index = 0,
  orientation = EOrietantation.TOP,
  coordinate = { x: 0, y: 0 },
  state = EStateArrow.IDLE,
  rotation = 0,
  isSelected = false,
  onSelect,
}: ArrowProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  /**
   * Clases que cambian el UI del arrow...
   */
  const className = `arrow ${orientation.toLowerCase()} ${state.toLowerCase()} ${
    isSelected ? "selected" : ""
  }`;

  /**
   * Sólo estará habilitado cuando está quieto...
   */
  const disabled = !(state === EStateArrow.IDLE);

  const style: React.CSSProperties = {
    left: coordinate.x,
    top: coordinate.y,
    // rotate: `${rotation}deg`,
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <button
      ref={ref}
      className={className}
      style={style}
      disabled={disabled}
      onClick={() => onSelect(index, ref)}
    />
  );
};

export default Arrow;
