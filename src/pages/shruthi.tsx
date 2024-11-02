import "./Shruthi.scss";
import CircleWave from "../components/circle-wave/CircleWave";
import ShruthiCard from "../components/shruthi-card/ShruthiCard";
import ShruthiSelector from "../components/shruthi-selector/ShruthiSelector";
import { YakshaMan } from "../utils/assets";
import { TanpuraTypes } from "../constants/UiData";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const shruthi = () => {
  const [selectedTanpura, setSelectedTanpura] = useState(TanpuraTypes[0].key);
  const [playTanpura, setPlayTanpura] = useState(false);

  return (
    <div className="shruthi">
      <div className="player-animation">
        <CircleWave />
        <img src={YakshaMan} alt="img" className="player-placeholder" />
      </div>
      <div className="shruthi-cards">
        {TanpuraTypes.map((data) => (
          <ShruthiCard
            key={data.key}
            tanpuraKey={data.key}
            title={data.title}
            isSelected={selectedTanpura === data.key}
            selectTanpura={() => setSelectedTanpura(data.key)}
          />
        ))}
      </div>
      <div className="shruthi-selector">
        <ShruthiSelector />
      </div>
      <div
        className="shruthi-controller"
        onClick={() => setPlayTanpura(!playTanpura)}
      >
        <FontAwesomeIcon
          icon={playTanpura ? faPause : faPlay}
          className={!playTanpura ? "play-icon" : ""}
        />
      </div>
    </div>
  );
};

export default shruthi;
