import { ARROW_SIZE, BASE_HEIGHT, BASE_WIDTH } from "../../utils/constants";

interface Box {
  x: number;
  y: number;
}

const calculateCollision = (
  movingBox: Box,
  otherBoxes: Box[],
  targetX: number,
  targetY: number
) => {
  console.log({ movingBox, otherBoxes, targetX, targetY });
  // const boxSize = ARROW_SIZE;

  // Limitar el movimiento dentro del contenedor
  targetX = Math.max(0, Math.min(targetX, BASE_WIDTH - ARROW_SIZE));
  targetY = Math.max(0, Math.min(targetY, BASE_HEIGHT - ARROW_SIZE));

  // Función para verificar colisión
  const hasCollision = (stepX: number, stepY: number): boolean => {
    return otherBoxes.some(
      (box) =>
        stepX < box.x + ARROW_SIZE &&
        stepX + ARROW_SIZE > box.x &&
        stepY < box.y + ARROW_SIZE &&
        stepY + ARROW_SIZE > box.y
    );
  };

  // Movimiento horizontal
  if (movingBox.y === targetY) {
    const direction = targetX > movingBox.x ? 1 : -1;
    for (let stepX = movingBox.x; stepX !== targetX; stepX += direction) {
      if (hasCollision(stepX, movingBox.y)) {
        console.log("COLISIONA HORIZONTAL");
        return { x: stepX - direction * ARROW_SIZE, y: movingBox.y };
      }
    }
  }

  // Movimiento vertical
  if (movingBox.x === targetX) {
    const direction = targetY > movingBox.y ? 1 : -1;
    for (let stepY = movingBox.y; stepY !== targetY; stepY += direction) {
      if (hasCollision(movingBox.x, stepY)) {
        console.log("COLISIONA VERTICAL");
        return { x: movingBox.x, y: stepY - direction * ARROW_SIZE };
      }
    }
  }

  console.log("NO HAY COLISIÓN");
  // No hay colisión, devolver la posición final
  return { x: targetX, y: targetY };
};

export default calculateCollision;
