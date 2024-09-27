import { ARROW_SIZE, LINE_SIZE, STOPPER_SIZE } from "./utils/constants";
import { Line, Arrival, Arrow, Stopper } from "./components/uiGame";
import AppWrapper from "./components/wrapper/app";

function App() {
  return (
    <AppWrapper>
      {/* Prueba para las líneas */}
      {/* Horizontal, cambia el tamaño de derecha a izquierda  */}
      <Line
        coordinate={{ x: 10, y: 400 }}
        height={LINE_SIZE}
        width={300}
        value={1}
        transform={{
          scale: "scaleX",
          origin: "left",
        }}
      />

      {/* Horizontal, cambia el tamaño de izquierda a derecha  */}
      <Line
        coordinate={{ x: 10, y: 430 }}
        height={LINE_SIZE}
        width={300}
        value={1}
        transform={{
          scale: "scaleX",
          origin: "right",
        }}
      />
      {/* vertical, cambia el tamaño de abajo a arriba  */}
      <Line
        coordinate={{ x: 100, y: 460 }}
        height={200}
        width={LINE_SIZE}
        value={1}
        transform={{
          scale: "scaleY",
          origin: "top",
        }}
      />
      {/* vertical, cambia el tamaño de arriba a abajo  */}
      <Line
        coordinate={{ x: 150, y: 460 }}
        height={200}
        width={LINE_SIZE}
        value={1}
        transform={{
          scale: "scaleY",
          origin: "bottom",
        }}
      />

      <Stopper coordinate={{ x: 50, y: 400 - STOPPER_SIZE / 3 }} />

      <Stopper coordinate={{ x: 150 - STOPPER_SIZE / 3, y: 460 }} />

      {/* Prueba puntos de llegada */}
      <Arrival coordinate={{ x: ARROW_SIZE * 2.5, y: ARROW_SIZE }} />
      <Arrival coordinate={{ x: ARROW_SIZE * 2.5, y: ARROW_SIZE * 5 }} />
      {/* Prueba arrows */}
      <Arrow
        index={0}
        orientation="RIGHT"
        coordinate={{ x: ARROW_SIZE, y: ARROW_SIZE }}
        onSelect={(value) => console.log({ value })}
      />
      <Arrow
        index={1}
        orientation="LEFT"
        coordinate={{ x: ARROW_SIZE * 5, y: ARROW_SIZE }}
        onSelect={(value) => console.log({ value })}
      />
      <Arrow
        index={2}
        orientation="TOP"
        coordinate={{ x: ARROW_SIZE, y: ARROW_SIZE * 5 }}
        onSelect={(value) => console.log({ value })}
      />
      <Arrow
        index={3}
        orientation="BOTTOM"
        coordinate={{ x: ARROW_SIZE * 5, y: ARROW_SIZE * 5 }}
        onSelect={(value) => console.log({ value })}
      />
    </AppWrapper>
  );
}

export default App;
