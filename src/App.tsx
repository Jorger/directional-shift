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
import testLevel from "./utils/levels/testLevel";
import { TTypeActionGame } from "./interfaces";
import { ETypeActionGame } from "./utils/constants";

function App() {
  // Temporal para reiniciar el juego...
  const [gameKey, setGameKey] = useState(`key-${Math.random()}`);

  const onChangeLevel = (action: TTypeActionGame) => {
    if (action === ETypeActionGame.RESTART) {
      setGameKey(`key-${Math.random()}`);
    }
  };

  // TTypeActionGame ETypeActionGame
  return (
    <AppWrapper>
      {/* <Editor /> */}
      <Game
        level={testLevel}
        numLevel={1}
        key={gameKey}
        onChangeLevel={onChangeLevel}
      />
    </AppWrapper>
  );
}

export default App;
// 227 294
// 134 387
