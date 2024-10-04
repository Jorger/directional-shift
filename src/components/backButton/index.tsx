import "./styles.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import Icon from "../icon";

const BackButton = () => (
  <div className="page-back">
    <Link className="page-back-link" to={ROUTES.LOBBY}>
      <Icon type="back" />
    </Link>
  </div>
);

export default BackButton;
