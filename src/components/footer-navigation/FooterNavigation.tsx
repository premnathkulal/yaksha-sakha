import "./FooterNavigation.scss";
import {
  TanpuraIcon,
  WaveFormIcon,
  ChendeIcon,
  MusicList,
} from "../../utils/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const FooterNavigation = () => {
  return (
    <div className="app-footer">
      <div className="menu selected">
        <FontAwesomeIcon icon={faHouse} className="fa-menu-icon" />
      </div>
      <div className="menu">
        <img src={WaveFormIcon} alt="icon" className="menu-icon" />
      </div>
      <div className="menu">
        <img src={TanpuraIcon} alt="icon" className="menu-icon tanpura-icon" />
      </div>
      <div className="menu">
        <img src={ChendeIcon} alt="icon" className="menu-icon" />
      </div>
      <div className="menu">
        <img src={MusicList} alt="icon" className="menu-icon" />
      </div>
    </div>
  );
};

export default FooterNavigation;
