import { ICoordinate } from "../../../interfaces";
import "./styles.css";

interface LineInfo {
  length: number;
  orientation: "horizontal" | "vertical";
}

function calculateLineInfo(start: ICoordinate, end: ICoordinate): LineInfo {
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;

  let length: number;
  let orientation: "horizontal" | "vertical";

  if (deltaX === 0) {
    // Línea vertical
    length = Math.abs(deltaY);
    orientation = "vertical";
  } else if (deltaY === 0) {
    // Línea horizontal
    length = Math.abs(deltaX);
    orientation = "horizontal";
  } else {
    throw new Error("Las líneas deben ser horizontales o verticales.");
  }

  return {
    length,
    orientation,
  };
}

const Line2 = () => {
  return <div className="line2">Line 2</div>;
};

export default Line2;
