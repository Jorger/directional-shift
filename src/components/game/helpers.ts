import cloneDeep from "lodash.clonedeep";
import type { IAnimate, Iline, IPathArrow, IStopper } from "../../interfaces";
import {
  ANGLE_ORIENTATION,
  ELineFinish,
  EStateArrow,
  ETypeAnimation,
} from "../../utils/constants";
import calculateCollision from "./checkCollisions";

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
// TODO: Se debe guardar si hay colisión para que así no continúe y
// se muestre el game over...
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

  // console.log(arrows[index]);
  // console.log(arrowRef?.current);

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

  const test = calculateCollision(
    {
      x: copyArrows[index].arrow.coordinate.x,
      y: copyArrows[index].arrow.coordinate.x,
    },
    copyArrows.map((arrow) => ({
      x: arrow.arrow.coordinate.x,
      y: arrow.arrow.coordinate.y,
    })),
    targetPositions[counterTarget].coordinate.x,
    targetPositions[counterTarget].coordinate.y
  );

  console.log({ test });

  /**
   * El valor a donde debe llegar el elemento...
   */
  // TODO: este valor puede cambiar por que se debe validar si hay colisión...
  const targetCoordinate = targetPositions[counterTarget].coordinate;

  /**
   * Establecer el nuevo valor de posición del arrow
   */
  copyArrows[index].arrow.coordinate = targetCoordinate;

  /**
   * Índice de la línea que se moverá...
   */
  const indexLineTarget = indexLines[counterTarget];

  /**
   * Establecer el cambio de la línea, en este caso para que haga la
   * animación de movimiento, en teoría ya está todo de la dirección
   * que viene desde el editor...
   */
  // TODO: no siempre será cero por que puede ser que hay colisión,
  // por lo tanto este valor depende hasta donde debe llegar la línea si hay
  // colisión...
  copyLines[indexLineTarget].value = 0;

  // console.log({ targetCoordinate, targetPositions, indexLines, counterTarget });
  /**
   * El total de posciones de destino para validar que no se exceda el valor...
   */
  // const totalTargets = targetPositions.length;

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
    // TODO: validar...
    reachesTarget: false,
    isCollision: false,
    animationRef: arrowRef || null,
  });
};

interface ValidateNextMovement {
  arrows: IPathArrow[];
  runAnimation: IAnimate;
  lines: Iline[];
  setArrows: React.Dispatch<React.SetStateAction<IPathArrow[]>>;
  setLines: React.Dispatch<React.SetStateAction<Iline[]>>;
  setRunAnimation: React.Dispatch<React.SetStateAction<IAnimate>>;
}

export const validateNextMovement = ({
  arrows,
  runAnimation,
  lines,
  setArrows,
  setLines,
  setRunAnimation,
}: ValidateNextMovement) => {
  const copyRunAnimation = cloneDeep(runAnimation);
  const copyArrows = cloneDeep(arrows);
  const copyLines = cloneDeep(lines);

  // console.log(runAnimation);

  // debugger;

  /**
   * La data de la animación que se está haciendo...
   */
  const { arrowIndex, typeAnimation } = copyRunAnimation;

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
    // console.log("INGRESA ACÁ POR QUE ERA D EMOVIMIENTO y quita la línea");
    /**
     * El índice de la línea que se ha movido, con este se puede
     * establecer que la línea no es visible para quitarla del DOM...
     */
    // TODO: se debe hacer algo similar con los stoppers...
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
      const nextCoordinate = targetPositions[nextCounterTarget].coordinate;
      copyArrows[arrowIndex].arrow.coordinate = nextCoordinate;

      copyArrows[arrowIndex].counterTarget = nextCounterTarget;

      /**
       * Obtener el valor final de la línea...
       */
      const nextIndexLine = indexLines[nextCounterTarget];

      // TODO: Validar colisiones...
      copyLines[nextIndexLine].value = 0;

      setLines(copyLines);

      copyRunAnimation.typeAnimation = ETypeAnimation.MOVE;

      const test = calculateCollision(
        {
          x: copyArrows[arrowIndex].arrow.coordinate.x,
          y: copyArrows[arrowIndex].arrow.coordinate.x,
        },
        copyArrows.map((arrow) => ({
          x: arrow.arrow.coordinate.x,
          y: arrow.arrow.coordinate.y,
        })),
        targetPositions[nextCounterTarget].coordinate.x,
        targetPositions[nextCounterTarget].coordinate.y
      );

      console.log("Valor de test: ", { test });
    }

    if (currentLineFinish === ELineFinish.STOPPER) {
      copyRunAnimation.isAnimate = false;
      copyArrows[arrowIndex].counterTarget = nextCounterTarget;

      // TODO: acá se podría poder la validación para quitar el stopper
      // pero se debe relacionar para saber a que stopper se hace referencia...
    }

    if (currentLineFinish === ELineFinish.ARRIVAL) {
      copyRunAnimation.isAnimate = false;
      copyRunAnimation.reachesTarget = true;
      copyArrows[arrowIndex].arrow.state = EStateArrow.FINISH;
      // console.log("LLEGO AL DESTINO!!");
    }
  }

  // if (typeAnimation === ETypeAnimation.ROTATION) {
  //   copyRunAnimation.isAnimate = false;
  // }

  setArrows(copyArrows);
  setRunAnimation(copyRunAnimation);

  // console.log({
  //   arrowIndex,
  //   typeAnimation,
  //   arrowData,
  //   currentOrientation,
  //   orientationTarget,
  // });
};
