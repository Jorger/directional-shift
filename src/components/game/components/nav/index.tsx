import "./styles.css";
import Icon from "../../../icon";

interface NavBarProps {
  onPause: () => void;
}

const NavBar = ({ onPause }: NavBarProps) => {
  return (
    <div className="game-nav">
      <button className="game-nav-button" onClick={onPause}>
        <Icon type="pause" />
      </button>
    </div>
  );
};

export default NavBar;
