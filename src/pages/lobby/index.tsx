import "./styles.css";
import { Arrow } from "../../components/uiGame";
import { GAME_INSTRUCTION, ROUTES } from "../../utils/constants";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import Icon from "../../components/icon";
import Share from "../../components/share";

const dataShare = {
  title: `Don't Collide`,
  text: "Come and play Don't Collide, a game developed by Jorge Rubiano @ostjh",
  url: window.location.origin,
};

const LobbyPage = () => (
  <div className="lobby-page">
    <div className="lobby-page-text">
      <Logo />
      <p className="lobby-page-instruction">{GAME_INSTRUCTION}</p>
    </div>
    <div className="lobby-page-arrow">
      <Arrow
        orientation="TOP"
        coordinate={{ x: 0, y: 0 }}
        state="IDLE"
        rotation={0}
      />
    </div>
    <Link className="lobby-page-play" to={ROUTES.LEVELS}>
      PLAY
    </Link>
    <div className="lobby-toolbar">
      <Link to={ROUTES.ABOUT} className="lobby-toolbar-button">
        <Icon type="info" />
      </Link>
      <Share data={dataShare}>
        <button className="lobby-toolbar-button">
          <Icon type="share" />
        </button>
      </Share>
    </div>
    <div className="lobby-toolbar-jam">
      <a
        href="https://reactjam.com/"
        target="_blank"
        rel="noreferrer"
        title="React JAM"
      >
        React Jam 2024
      </a>
    </div>
  </div>
);

export default LobbyPage;
