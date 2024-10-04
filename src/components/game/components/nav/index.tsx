import "./styles.css";
import { useCallback, useState } from "react";
import { useWait } from "../../../../hooks";
import Icon from "../../../icon";
import Options from "../../../options";

interface NavBarProps {
  numLevel: number;
  onPause: () => void;
}

const NavBar = ({ numLevel = 0, onPause }: NavBarProps) => {
  const [showLevel, setShowLevel] = useState(true);

  /**
   * Para ocultar el elemento que muestra el número del nivel...
   */
  useWait(
    true,
    1000,
    useCallback(() => setShowLevel(false), [])
  );

  return (
    <div className="game-nav">
      <button className="game-nav-button" onClick={onPause}>
        <Icon type="pause" />
      </button>
      <div className="game-nav-level">
        <div className={`game-nav-level-value ${!showLevel ? "hide" : ""}`}>
          Level {numLevel}
        </div>
      </div>
      <Options />
    </div>
  );
};

export default NavBar;
