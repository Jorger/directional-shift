import "./styles.css";
import { Modal, NavBar, RenderBlocks } from "./components";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOptionsContext } from "../../context/optionContext";
import { useWait } from "../../hooks";
import {
  ESounds,
  ETypeActionGame,
  INITIAL_ANIMATION_DATA,
  INITIAL_DATA_GAME_OVER,
  ROUTES,
  WAIT_SHOW_MODAL_GAME_OVER,
} from "../../utils/constants";
import {
  getArrowsData,
  getLinesData,
  getStoppersData,
  validateClickArrow,
  validateNextMovement,
} from "./helpers";
import type {
  IAnimate,
  IGameOver,
  ILevel,
  TTypeActionGame,
} from "../../interfaces";

interface GameProps {
  level: ILevel;
  numLevel: number;
  onChangeLevel: (action: TTypeActionGame) => void;
}

/**
 * Componente principal del juego...
 */
const Game = ({ level, numLevel, onChangeLevel }: GameProps) => {
  /**
   * Para el manejo de sonidos
   */
  const { playSound } = useOptionsContext();
  /**
   * Para el manejo del router...
   */
  const navigate = useNavigate();
  /**
   * Para las flechas de movimiento...
   */
  const [arrows, setArrows] = useState(() => getArrowsData(level.arrows));
  /**
   * Para los valores de las líneas de juego...
   */
  const [lines, setLines] = useState(() => getLinesData(level.lines));
  /**
   * Para los Stoppers
   */
  const [stoppers, setStoppers] = useState(() =>
    getStoppersData(level.stoppers)
  );

  /**
   * Para controlar la animación...
   */
  const [runAnimation, setRunAnimation] = useState<IAnimate>(
    INITIAL_ANIMATION_DATA
  );

  /**
   * Determina si se ha acabado el juego...
   */
  const [gameOver, setGameOver] = useState<IGameOver>(INITIAL_DATA_GAME_OVER);

  /**
   * Para establecer el estado de pause del juego
   */
  const [isPause, setIsPause] = useState(false);

  /**
   * Efecto que escucha cuando existe una animación...
   */
  useEffect(() => {
    /**
     * Sólo se ejecuta cuando se establece que se está animando...
     */
    if (runAnimation.isAnimate) {
      const runSync = async () => {
        /**
         * Validar si la animación ha terminado de ejecutar...
         */
        const animations = runAnimation.animationRef?.current
          ?.getAnimations()
          .map((a) => a.finished);

        if (animations) {
          /**
           * Espera hasta que las animaciones ha terminado de ejecutar...
           */
          await Promise.allSettled(animations);

          /**
           * Una vez termina la animación, se valida el siguiente paso...
           */
          validateNextMovement({
            arrows,
            lines,
            numLevel,
            runAnimation,
            playSound,
            setArrows,
            setGameOver,
            setLines,
            setRunAnimation,
            setStoppers,
          });
        }
      };

      runSync();
    }
  }, [arrows, lines, numLevel, playSound, runAnimation]);

  /**
   * Espera un tiempo antes de mostrar el modal del gameOver
   */
  useWait(
    gameOver.isGameOver,
    WAIT_SHOW_MODAL_GAME_OVER,
    // Se usa el useCallback para evitar que la función se genere cada vez que renderiza el componente...
    useCallback(
      () =>
        setGameOver((current) => {
          playSound(current.isSucces ? ESounds.SUCCES : ESounds.GAMER_OVER);

          return { ...current, showModal: true };
        }),
      [playSound]
    )
  );

  /**
   * Función que valida cuando se hace click en el arrow...
   */
  const handleClickArrow = (
    index = 0,
    arrowRef?: React.RefObject<HTMLButtonElement>
  ) => {
    if (!runAnimation.isAnimate && !gameOver.isGameOver) {
      validateClickArrow({
        arrowRef,
        arrows,
        index,
        lines,
        setArrows,
        setRunAnimation,
        setLines,
      });

      playSound(ESounds.CLICK_ARROW);
    }
  };

  const handleAction = (action = "") => {
    if (action === "home") {
      navigate(ROUTES.LOBBY);
    }

    if (action === "undo") {
      onChangeLevel(ETypeActionGame.RESTART);
    }

    if (action === "play") {
      if (gameOver.isSucces) {
        onChangeLevel(ETypeActionGame.NEXTLEVEL);
      } else {
        setIsPause(false);
      }
    }
  };

  /**
   * Props para los bloques del juego...
   */
  const propsRenderBlocks = {
    lines,
    stoppers,
    arrivals: level.arrivals,
    arrows,
    handleClickArrow,
  };

  const propsModal = {
    isVisible: gameOver.showModal || isPause,
    isSucces: gameOver.isSucces,
    isPause,
    numLevel,
    handleAction,
  };

  return (
    <div className="game">
      <Modal {...propsModal} />
      <NavBar numLevel={numLevel} onPause={() => setIsPause(true)} />
      <RenderBlocks {...propsRenderBlocks} />
    </div>
  );
};

export default Game;
