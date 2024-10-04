import {
  ANGLE_ORIENTATION,
  ARROW_SIZE,
  ELineFinish,
  EOrietantation,
  EStateArrow,
  ETypeAnimation,
} from "../../utils/constants";
import calculateCollision from "./checkCollisions";
import cloneDeep from "lodash.clonedeep";
import type {
  IAnimate,
  ICoordinate,
  IGameOver,
  Iline,
  IPathArrow,
  IStopper,
} from "../../interfaces";

/**
 * Validar si un arrow colisiona con otro arrow,
 * si hay colision devuleve la posición hasta donde debe llegar
 * así como el scale de la línea
 */
const validateColision = (
  indexArrow: number,
  arrows: IPathArrow[],
  target: ICoordinate,
  line: Iline
) => {
  /**
   * El valor de escalamiento de la línea, cuando es 0 es que va de 1 a 0
   * de esta forma se muestra la animación de cambio de tamaño de la línea...
   */
  let scaleLine = 0;

  /**
   * Se extrae sólo las coordenadas actuales de la caja (arrow) que se moverá
   */
  const movingBox = {
    x: arrows[indexArrow].arrow.coordinate.x,
    y: arrows[indexArrow].arrow.coordinate.y,
  };

  /**
   * Se expecífica el vlaor de las demás cajas con las que se valida si hay
   * colsión, se excluye la caja que se esta moviendo
   */
  const otherBoxes = arrows
    .filter((_, i) => i !== indexArrow)
    .map((arrow) => ({
      x: arrow.arrow.coordinate.x,
      y: arrow.arrow.coordinate.y,
    }));

  const { colission, x, y } = calculateCollision(
    movingBox,
    otherBoxes,
    target.x,
    target.y
  );

  /**
   * Si hay colisión se compesa la posición...
   */
  if (colission) {
    // const lineOrigin = line.transform.origin;
    const { orientation } = arrows[indexArrow].arrow;
    let newX = x;
    let newY = y;

    const isHorizontal =
      orientation === EOrietantation.LEFT ||
      orientation === EOrietantation.RIGHT;

    /**
     * Guarda el valor de diferencia entre las posiciones para calcular
     * el scale de la línea para la animación,
     * se hace antes de modificar el valor del target...
     */
    const diferenceGlobalPosition = isHorizontal
      ? Math.abs(movingBox.x - target.x)
      : Math.abs(movingBox.y - target.y);

    /**
     * Se establece la posición a donde llegará el arrow
     */
    if (isHorizontal) {
      newX += ARROW_SIZE * (orientation === EOrietantation.RIGHT ? 1 : -1);
    } else {
      newY += ARROW_SIZE * (orientation === EOrietantation.BOTTOM ? 1 : -1);
    }

    /**
     * Se obtiene la diferencia hasta donde llega el arrow en la colisión...
     */
    const diferenceCollision = isHorizontal
      ? Math.abs(movingBox.x - newX)
      : Math.abs(movingBox.y - newY);

    /**
     * Se cálcula el valor de scale de la línea...
     */
    scaleLine = +(diferenceCollision / diferenceGlobalPosition).toFixed(2);

    // console.clear();

    // console.log({
    //   movingBox,
    //   scaleLine,
    //   diferenceCollision,
    //   diferenceGlobalPosition,
    //   lineOrigin,
    // });

    // lineOrigin === ELineOrigin.right || lineOrigin === ELineOrigin.top
    /**
     * Se compesa el valor dependiendo de la dirección...
     */
    // if (lineOrigin !== ELineOrigin.bottom) {
    //   scaleLine = 1 - scaleLine;
    // }
    scaleLine = 1 - scaleLine;

    /**
     * Se establecen los nuevos valores a los cuales irá el arrow...
     */
    target.x = newX;
    target.y = newY;
  }

  return { colission, target, scaleLine };
};

interface ValidateCompletedLevel {
  arrows: IPathArrow[];
  setGameOver: React.Dispatch<React.SetStateAction<IGameOver>>;
}

/**
 * Validar si todos los arrrows están en su punto de destino...
 */
const validateCompletedLevel = ({
  arrows,
  setGameOver,
}: ValidateCompletedLevel) => {
  /**
   * Se obtiene el total de arrows para así saber si todos están terminados...
   */
  const totalArrows = arrows.length;

  /**
   * Validar los arrows que han llegado al final...
   */
  const arrowsArrivalPoint = arrows.filter(
    (value) => value.arrow.state === EStateArrow.FINISH
  ).length;

  /**
   * Valida si todos los arrows han llegado a su destino...
   */
  if (totalArrows === arrowsArrivalPoint) {
    setGameOver({ isGameOver: true, showModal: false, isSucces: true });
  }
};

/**
 * Función que serializa la información de los arrows
 * para que se pueda cambiar el estado...
 */
export const getArrowsData = (arrows: IPathArrow[]) => {
  /**
   * Se toma los valores actuales de los arrows y se agrega un
   * contador para la animación del movimiento
   */
  const newArrows: IPathArrow[] = arrows.map((v) => ({
    ...v,
    arrivesDestination: false,
    counterTarget: 0,
  }));

  return newArrows;
};

/**
 * Generar data inicial para las líneas...
 * @param lines
 * @returns
 */
export const getLinesData = (lines: Iline[]) => {
  /**
   * Se le agrega la propiedad visible para ocultar la línea
   * cuando haya terminado de cambiar de tamaño...
   */
  const newLines: Iline[] = lines.map((v) => ({ ...v, visible: true }));

  return newLines;
};

/**
 * Para generar la data inicial de los stoppers...
 * @param stoppers
 * @returns
 */
export const getStoppersData = (stoppers: IStopper[]) => {
  /**
   * Se le agrega la propiedad visible para ocultar el stopper
   * cuando haya terminado de cambiar de tamaño...
   */
  const newStoppers: IStopper[] = stoppers.map((v) => ({
    ...v,
    visible: true,
  }));

  return newStoppers;
};

interface ValidateClickArrow {
  arrowRef?: React.RefObject<HTMLButtonElement>;
  arrows: IPathArrow[];
  index: number;
  lines: Iline[];
  setArrows: React.Dispatch<React.SetStateAction<IPathArrow[]>>;
  setLines: React.Dispatch<React.SetStateAction<Iline[]>>;
  setRunAnimation: React.Dispatch<React.SetStateAction<IAnimate>>;
}

/**
 * Validar cuando se hace click en el arrow
 * @param param0
 * @returns
 */
export const validateClickArrow = ({
  arrowRef,
  arrows,
  index,
  lines,
  setArrows,
  setLines,
  setRunAnimation,
}: ValidateClickArrow) => {
  /**
   * Si ya llegó al destino no hará evento alguno
   */
  if (arrows[index].arrivesDestination) return;

  /**
   * Se clona el valor de arrows para modificar...
   */
  const copyArrows = cloneDeep(arrows);

  /**
   * Copia de las líneas que se deben modificar...
   */
  const copyLines = cloneDeep(lines);

  /**
   * Extraer la data que se requiere...
   */
  const { indexLines, targetPositions, counterTarget = 0 } = copyArrows[index];

  /**
   * Índice de la línea que se moverá...
   */
  const indexLineTarget = indexLines[counterTarget];

  const {
    colission: isCollision,
    target: targetCoordinate,
    scaleLine,
  } = validateColision(
    index,
    copyArrows,
    targetPositions[counterTarget].coordinate,
    copyLines[indexLineTarget]
  );

  /**
   * Establecer el nuevo valor de posición del arrow
   */
  copyArrows[index].arrow.coordinate = targetCoordinate;

  /**
   * Establecer el cambio de la línea, en este caso para que haga la
   * animación de movimiento, en teoría ya está todo de la dirección
   * que viene desde el editor...
   */
  copyLines[indexLineTarget].value = scaleLine;

  /**
   * Establecer el cambio de estados...
   */
  setArrows(copyArrows);
  setLines(copyLines);

  /**
   * Valores para la animación...
   */
  setRunAnimation({
    isAnimate: true,
    typeAnimation: ETypeAnimation.MOVE,
    arrowIndex: index,
    // reachesTarget: false,
    isCollision,
    animationRef: arrowRef || null,
  });
};

interface ValidateNextMovement {
  arrows: IPathArrow[];
  runAnimation: IAnimate;
  lines: Iline[];
  setArrows: React.Dispatch<React.SetStateAction<IPathArrow[]>>;
  setGameOver: React.Dispatch<React.SetStateAction<IGameOver>>;
  setLines: React.Dispatch<React.SetStateAction<Iline[]>>;
  setRunAnimation: React.Dispatch<React.SetStateAction<IAnimate>>;
  setStoppers: React.Dispatch<React.SetStateAction<IStopper[]>>;
}

/**
 * Función que valida el movimiento siguiente del arrow...
 * @param param0
 */
export const validateNextMovement = ({
  arrows,
  runAnimation,
  lines,
  setArrows,
  setGameOver,
  setLines,
  setRunAnimation,
  setStoppers,
}: ValidateNextMovement) => {
  const copyRunAnimation = cloneDeep(runAnimation);
  const copyArrows = cloneDeep(arrows);
  const copyLines = cloneDeep(lines);

  /**
   * La data de la animación que se está haciendo...
   */
  const { arrowIndex, typeAnimation, isCollision } = copyRunAnimation;

  if (isCollision) {
    /**
     * Para indicar que el juego ha acabado y se indica que no tuvo éxito...
     */
    setGameOver({ isGameOver: true, showModal: false, isSucces: false });

    /**
     * Esrablecer el estado de colisión para el arrow...
     */
    copyArrows[arrowIndex].arrow.state = EStateArrow.COLLISION;
    setArrows(copyArrows);

    copyRunAnimation.isAnimate = false;
    return setRunAnimation(copyRunAnimation);
  }

  /**
   * Obtener la data del arrow animado...
   */
  const arrowData = copyArrows[arrowIndex];

  /**
   * Obtener el contador actual de la animación que hizo,
   * así como las posociones y los índices de las líneas...
   */
  const {
    counterTarget: currentCounterTarget = 0,
    targetPositions,
    indexLines,
  } = arrowData;

  const indexLine = indexLines[currentCounterTarget];

  let validateNextStep = typeAnimation === ETypeAnimation.ROTATION;

  /**
   * El valor final de la línea cuando llega al destino...
   */
  const currentLineFinish = copyLines[indexLine].finish;
  /**
   * Si era del tipo de movimiento, se quita la línea del DOM...
   */
  if (typeAnimation === ETypeAnimation.MOVE) {
    /**
     * El índice de la línea que se ha movido, con este se puede
     * establecer que la línea no es visible para quitarla del DOM...
     */
    copyLines[indexLine].visible = false;
    setLines(copyLines);

    /**
     * La orientación actual del arrow...
     */
    const currentOrientation = arrowData.arrow.orientation;

    /**
     * Obtener el ángulo actual del arrow...
     */
    const currentRotation = arrowData.arrow.rotation;

    /**
     * La orientación que tiene el target a donde ha llegado el arrow...
     */
    const { orientation: orientationTarget } =
      targetPositions[currentCounterTarget];

    /**
     * Se valida si el angúlo del arrow ha cambiado...
     */
    if (
      currentOrientation !== orientationTarget &&
      currentLineFinish !== ELineFinish.ARRIVAL
    ) {
      const finalAngle =
        ANGLE_ORIENTATION[currentOrientation][orientationTarget];
      const newAngle = currentRotation + finalAngle;

      // Se cambira la rotación del arrow...
      copyArrows[arrowIndex].arrow.rotation = newAngle;
      copyArrows[arrowIndex].arrow.orientation = orientationTarget;

      /**
       * Indica que la animación ahora es de rotación...
       */
      copyRunAnimation.typeAnimation = ETypeAnimation.ROTATION;
    } else {
      validateNextStep = true;
    }
  }

  if (validateNextStep) {
    const nextCounterTarget = currentCounterTarget + 1;

    // Se deb incrementar el contador del arrow y pasar al siguiente target...
    // const totalTarget = targetPositions.length;
    if (currentLineFinish === ELineFinish.NEXT) {
      /**
       * Obtener el valor final de la línea...
       */
      const nextIndexLine = indexLines[nextCounterTarget];

      const {
        colission,
        target: nextCoordinate,
        scaleLine,
      } = validateColision(
        arrowIndex,
        copyArrows,
        targetPositions[nextCounterTarget].coordinate,
        copyLines[nextIndexLine]
      );

      copyArrows[arrowIndex].arrow.coordinate = nextCoordinate;
      copyArrows[arrowIndex].counterTarget = nextCounterTarget;
      copyLines[nextIndexLine].value = scaleLine;

      setLines(copyLines);

      copyRunAnimation.typeAnimation = ETypeAnimation.MOVE;

      copyRunAnimation.isCollision = colission;
    }

    if (currentLineFinish === ELineFinish.STOPPER) {
      copyRunAnimation.isAnimate = false;
      copyArrows[arrowIndex].counterTarget = nextCounterTarget;

      /**
       * Para ocultar el stopper
       */
      setStoppers((current) => {
        const copyStoppers = cloneDeep(current);
        /**
         * Buscar el indice de la línea que está asociado con el stopper
         */
        const stopperIndex = copyStoppers.findIndex(
          (v) => v.indexLine === indexLine
        );

        /**
         * Si existe el índice, ocultar el stopper del dom...
         */
        if (stopperIndex >= 0) {
          copyStoppers[stopperIndex].visible = false;
        }

        return copyStoppers;
      });
    }

    if (currentLineFinish === ELineFinish.ARRIVAL) {
      copyRunAnimation.isAnimate = false;
      // copyRunAnimation.reachesTarget = true;
      copyArrows[arrowIndex].arrow.state = EStateArrow.FINISH;

      /**
       * Para validar si ha terminado de llevar todos los arrows...
       */
      validateCompletedLevel({ arrows: copyArrows, setGameOver });
    }
  }

  setArrows(copyArrows);
  setRunAnimation(copyRunAnimation);
};
