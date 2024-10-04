import { ETypeActionGame } from "../../utils/constants";
import { getLevel } from "../../utils/levels";
import { ListLevels } from "./components";
import { TTypeActionGame } from "../../interfaces";
import { useState } from "react";
import Game from "../../components/game";

const LevelsPage = () => {
  const [numLevel, setNumLevel] = useState(-1);
  const [gameKey, setGameKey] = useState(`key-${Math.random()}`);

  const onChangeLevel = (action: TTypeActionGame) => {
    setGameKey(`key-${Math.random()}`);

    if (action === ETypeActionGame.NEXTLEVEL) {
      setNumLevel(numLevel + 1);
    }
  };

  if (numLevel >= 0) {
    return (
      <Game
        level={getLevel(numLevel)}
        numLevel={numLevel + 1}
        key={gameKey}
        onChangeLevel={onChangeLevel}
      />
    );
  }

  return <ListLevels onClickLevel={(value) => setNumLevel(value)} />;
};

export default LevelsPage;
