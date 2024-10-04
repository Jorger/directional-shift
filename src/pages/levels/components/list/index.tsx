import "./styles.css";
import { fillArray } from "../../../../utils/helpers";
import { getLevelPassedNumber, TOTAL_LEVELS } from "../../../../utils/levels";
import BackButton from "../../../../components/backButton";

interface ListLevelsProps {
  onClickLevel: (numLevel: number) => void;
}

const ListLevels = ({ onClickLevel }: ListLevelsProps) => {
  /**
   * Indica el nivel que ya se ha pasado...
   */
  const levelPassedNumber = getLevelPassedNumber();

  return (
    <div className="list-levels">
      <BackButton />
      <h2>SELECT LEVEL</h2>
      <div className="list-levels-wrapper">
        {fillArray(TOTAL_LEVELS).map((numLevel) => {
          const disabled = !(numLevel <= levelPassedNumber);

          return (
            <button
              className="list-levels-button"
              key={numLevel}
              disabled={disabled}
              onClick={() => onClickLevel(numLevel)}
            >
              {numLevel + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ListLevels;
