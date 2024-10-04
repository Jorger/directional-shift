import { getValueFromCache, savePropierties } from "../storage";
import { isNumber } from "../helpers";
import LEVELS from "./levels";

export const TOTAL_LEVELS = LEVELS.length;

/**
 * Obtener el nivel...
 * @param numLevel
 * @returns
 */
export const getLevel = (numLevel = 0) => LEVELS[numLevel];

/**
 * Obtener el número dle nivel que ya se ha pasado de localStorage...
 */
export const getLevelPassedNumber = () => {
  const defaltLevel = 0;
  let numLevel = getValueFromCache("numLevel", defaltLevel) as number;

  if (!isNumber(numLevel) || numLevel < 0 || numLevel >= TOTAL_LEVELS) {
    numLevel = defaltLevel;
  }

  return numLevel;
};

/**
 * Guardar y valida el número del nivel que se ha pasado...
 * @param numLevel
 */
export const saveLevelPassedNumber = (numLevel = 0) => {
  const levelPassedNumber = getLevelPassedNumber();

  /**
   * Sólo si está en el rango de niveles y además si es mayor que el
   * nivel que ya se pasó...
   */
  if (
    numLevel >= 0 &&
    numLevel < TOTAL_LEVELS &&
    numLevel > levelPassedNumber
  ) {
    savePropierties("numLevel", numLevel);
  }
};
