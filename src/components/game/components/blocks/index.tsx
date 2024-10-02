import { Iline, IStopper, IArrival, IPathArrow } from "../../../../interfaces";
import { Line, Stopper, Arrival, Arrow } from "../../../uiGame";
import React from "react";

interface RenderBlocksProps {
  lines: Iline[];
  stoppers: IStopper[];
  arrivals: IArrival[];
  arrows: IPathArrow[];
  handleClickArrow: (
    index?: number,
    arrowRef?: React.RefObject<HTMLButtonElement>
  ) => void;
}

/**
 * Renderiza los bloques del juego...
 * @param param0
 * @returns
 */
const RenderBlocks = ({
  lines,
  stoppers,
  arrivals,
  arrows,
  handleClickArrow,
}: RenderBlocksProps) => (
  <React.Fragment>
    {/* Renderizar la líneas */}
    {lines.map((line) => line.visible && <Line {...line} key={line.index} />)}
    {/* Renderizar los stoppers */}
    {stoppers.map(
      (stopper) =>
        stopper.visible && <Stopper {...stopper} key={stopper.index} />
    )}
    {/* Renderizar los arrivals, estos no cambian por ello no tienen estado */}
    {arrivals.map((arrival) => (
      <Arrival {...arrival} key={arrival.index} />
    ))}
    {/* Renderizar los arrows */}
    {arrows.map(({ arrow }) => (
      <Arrow {...arrow} key={arrow.index} onSelect={handleClickArrow} />
    ))}
  </React.Fragment>
);

export default RenderBlocks;
