// import Editor from "./components/editor";
// import AppWrapper from "./components/wrapper/app";

// function App() {
//   return (
//     <AppWrapper>
//       <Editor />
//     </AppWrapper>
//   );
// }

import { useState } from "react";
import Game from "./components/game";
import AppWrapper from "./components/wrapper/app";
// import testLevel from "./utils/levels/testLevel";
import { TTypeActionGame } from "./interfaces";
import { ETypeActionGame } from "./utils/constants";
import LEVELS from "./utils/levels/levels";
import { fillArray } from "./utils/helpers";

const TMP_TOTAL_LEVELS = LEVELS.length;

function App() {
  // Temporal para reiniciar el juego...
  const [gameKey, setGameKey] = useState(`key-${Math.random()}`);

  // TODO: temporal para probar los niveles...
  const [tmpNumLevel, setTmpNumLevel] = useState(0);

  const onChangeLevel = (action: TTypeActionGame) => {
    setGameKey(`key-${Math.random()}`);

    if (action === ETypeActionGame.NEXTLEVEL) {
      // TODO: temporal, se debe refactorizar...
      setTmpNumLevel(tmpNumLevel + 1);
    }
  };

  const onChangeSelectLevel = (newNumLevel = 0) => {
    setGameKey(`key-${Math.random()}`);
    setTmpNumLevel(newNumLevel);
  };

  return (
    <AppWrapper>
      <Game
        level={LEVELS[tmpNumLevel]}
        numLevel={tmpNumLevel + 1}
        key={gameKey}
        onChangeLevel={onChangeLevel}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          padding: 10,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Prueba para seleccionar lo niveles para poder probarlos */}
        <select
          onChange={(e) => onChangeSelectLevel(+e.target.value)}
          value={tmpNumLevel}
        >
          {fillArray(TMP_TOTAL_LEVELS).map((num) => (
            <option key={num} value={num}>
              {`Level ${+num + 1}`}
            </option>
          ))}
        </select>
      </div>
    </AppWrapper>
  );
}

export default App;
