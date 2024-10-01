import "./styles.css";
import { Arrival, Arrow, Line, Stopper } from "../uiGame";
import { INITIAL_ANIMATION_DATA } from "../../utils/constants";
import { useEffect, useState } from "react";
import {
  getArrowsData,
  getLinesData,
  getStoppersData,
  validateClickArrow,
  validateNextMovement,
} from "./helpers";
import type { IAnimate, ILevel } from "../../interfaces";

const Game = ({ level }: { level: ILevel }) => {
  /**
   * Para las flechas de movimiento...
   */
  const [arrows, setArrows] = useState(() => getArrowsData(level.arrows));
  const [lines, setLines] = useState(() => getLinesData(level.lines));
  // TODO: se deben relacionar los stoppers, para así poderlos ocultar...
  // setStoppers
  const [stoppers] = useState(() => getStoppersData(level.stoppers));

  const [runAnimation, setRunAnimation] = useState<IAnimate>(
    INITIAL_ANIMATION_DATA
  );

  useEffect(() => {
    // console.log("runAnimation", runAnimation);

    if (runAnimation.isAnimate) {
      const runSync = async () => {
        const animations = runAnimation.animationRef?.current
          ?.getAnimations()
          .map((a) => a.finished);

        if (animations) {
          await Promise.allSettled(animations);
          // TODO: validar si hay colisión...
          validateNextMovement({
            arrows,
            runAnimation,
            lines,
            setArrows,
            setLines,
            setRunAnimation,
          });
        } else {
          console.log("NO DETECTA ANIMACIÓN :(");
        }
      };

      runSync();
    }
  }, [arrows, lines, runAnimation]);

  const handleClickArrow = (
    index = 0,
    arrowRef?: React.RefObject<HTMLButtonElement>
  ) => {
    if (!runAnimation.isAnimate) {
      validateClickArrow({
        arrowRef,
        arrows,
        index,
        lines,
        setArrows,
        setRunAnimation,
        setLines,
      });
    }
  };

  // level.arrivals

  // console.log(arrows);
  return (
    <div className="game">
      {/* Renderizar la líneas */}
      {lines.map((line) => line.visible && <Line {...line} key={line.index} />)}
      {/* Renderizar los stoppers */}
      {stoppers.map(
        (stopper) =>
          stopper.visible && <Stopper {...stopper} key={stopper.index} />
      )}
      {/* Renderizar los arrivals, estos no cambian por ello no tienen estado */}
      {level.arrivals.map((arrival) => (
        <Arrival {...arrival} key={arrival.index} />
      ))}
      {/* Renderizar los arrows */}
      {arrows.map(({ arrow }) => (
        <Arrow {...arrow} key={arrow.index} onSelect={handleClickArrow} />
      ))}
    </div>
  );
};

export default Game;
