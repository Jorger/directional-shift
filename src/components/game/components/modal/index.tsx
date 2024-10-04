import "./styles.css";
import { randomNumber } from "../../../../utils/helpers";
import { TOTAL_LEVELS } from "../../../../utils/levels";
import { useCallback, useState } from "react";
import { useWait } from "../../../../hooks";
import {
  CONFETTI_CONFIGURATION,
  GAME_INSTRUCTION,
  MODAL_LABELS,
  WAIT_SHOW_MODAL_GAME_OVER,
} from "../../../../utils/constants";
import Confetti from "react-dom-confetti";
import Icon, { TypeIcon } from "../../../icon";

const getCopy = (isSucces = false, isPause = false) => {
  const typeLabel = isSucces ? "completed" : "gameOver";
  const totalCopy = MODAL_LABELS[typeLabel].length - 1;
  const label = MODAL_LABELS[typeLabel][randomNumber(0, totalCopy)];
  return isPause ? GAME_INSTRUCTION : label;
};

interface ModalProps {
  isVisible: boolean;
  isSucces: boolean;
  isPause: boolean;
  numLevel: number;
  handleAction: (action: string) => void;
}

const Modal = ({
  isVisible = false,
  isSucces = false,
  isPause = false,
  numLevel = 0,
  handleAction,
}: ModalProps) => {
  const [showConfetti, setShowConfetti] = useState(false);

  /**
   * Interrupción para mostrar el confetti...
   */
  useWait(
    isSucces,
    WAIT_SHOW_MODAL_GAME_OVER,
    useCallback(() => setShowConfetti(true), [])
  );

  const title = isPause
    ? `${numLevel}/${TOTAL_LEVELS}`
    : isSucces
    ? "You Win!"
    : "Game Over";

  const copy = getCopy(isSucces, isPause);

  const isFinalLevel = numLevel === TOTAL_LEVELS;

  return (
    <div className={`modal-level ${isVisible ? "show" : "hide"}`}>
      <div className="modal-level-shadow" />
      <div className="modal-level-wrapper">
        <div className="modal-level-confetti">
          <Confetti active={showConfetti} config={CONFETTI_CONFIGURATION} />
        </div>
        <div className={`modal-level-container ${isSucces ? "completed" : ""}`}>
          <div className="modal-level-header">{title}</div>
          <div className="modal-level-copy">{copy}</div>
          <div className="modal-level-reward">
            Complete the level to go to the next
          </div>
          <div className="modal-level-buttons">
            {[
              {
                action: "home",
                label: "Home",
                color: "gray",
              },
              {
                action: "undo",
                label: "Restart",
                color: "gray",
              },
              {
                action: "play",
                label: isPause ? "Resume" : "Next Level",
                color: "blue",
              },
            ].map(({ action, label, color }, key) => {
              let showButton = action === "play" ? isPause || isSucces : true;

              if (action === "play" && isFinalLevel) {
                showButton = false;
              }

              return (
                showButton && (
                  <button
                    key={key}
                    className={`button button-${color}`}
                    onClick={() => handleAction(action)}
                  >
                    <Icon type={action as TypeIcon} />
                    <span>{label}</span>
                  </button>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
