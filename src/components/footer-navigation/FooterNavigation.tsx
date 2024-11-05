import "./FooterNavigation.scss";
import {
  TanpuraIcon,
  WaveFormIcon,
  ChendeIcon,
  MusicList,
} from "../../utils/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const FooterNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const isPathMatching = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="app-footer">
      <div
        className={`menu ${isPathMatching("/home-page") ? "selected" : ""}`}
        onClick={() => navigate("/home-page")}
      >
        <FontAwesomeIcon icon={faHouse} className="fa-menu-icon" />
      </div>
      <div
        className={`menu ${isPathMatching("/tuner") ? "selected" : ""}`}
        onClick={() => navigate("/tuner")}
      >
        <img src={WaveFormIcon} alt="icon" className="menu-icon" />
      </div>
      <div
        className={`menu ${isPathMatching("/") ? "selected" : ""}`}
        onClick={() => navigate("/")}
      >
        <img src={TanpuraIcon} alt="icon" className="menu-icon tanpura-icon" />
      </div>
      <div
        className={`menu ${isPathMatching("/himmela") ? "selected" : ""}`}
        onClick={() => navigate("himmela")}
      >
        <img src={ChendeIcon} alt="icon" className="menu-icon" />
      </div>
      <div
        className={`menu ${
          isPathMatching("/raga-tala-list") ? "selected" : ""
        }`}
        onClick={() => navigate("raga-tala-list")}
      >
        <img src={MusicList} alt="icon" className="menu-icon" />
      </div>
    </div>
  );
};

export default FooterNavigation;
