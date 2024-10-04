import "./styles.css";
import Icon from "../../../icon";
import Options from "../../../options";

interface NavBarProps {
  onPause: () => void;
}

const NavBar = ({ onPause }: NavBarProps) => {
  return (
    <div className="game-nav">
      <button className="game-nav-button" onClick={onPause}>
        <Icon type="pause" />
      </button>
      <Options />
    </div>
  );
};

export default NavBar;
