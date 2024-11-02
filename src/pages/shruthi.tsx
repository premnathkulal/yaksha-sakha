import "./Shruthi.scss";
import CircleWave from "../components/circle-wave/CircleWave";
import ShruthiCard from "../components/shruthi-card/ShruthiCard";
import ShruthiSelector from "../components/shruthi-selector/ShruthiSelector";
import {
  ChendeIcon,
  TanpuraIcon,
  YakshaMan,
  JagateIcon,
} from "../utils/assets";
import { TanpuraTypes } from "../constants/UiData";
import { useState } from "react";
import TalaShortInfo from "../components/tala-short-info/TalaShortInfo";

const shruthi = () => {
  const [selectedTanpura, setSelectedTanpura] = useState(TanpuraTypes[0].key);
  const [tanpuraSelected, setTanpuraSelected] = useState(false);
  const [talaSelected, setTalaSelected] = useState(false);
  const [chendeSelected, setChendeSelected] = useState(false);

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
      <TalaShortInfo />
      <div className="shruthi-controller-container">
        <div
          className={`shruthi-controller ${tanpuraSelected ? "selected" : ""}`}
          onClick={() => setTanpuraSelected(!tanpuraSelected)}
        >
          <img
            src={TanpuraIcon}
            alt="icon"
            className="instrument-icon tanpura-icon"
          />
        </div>
        <div
          className={`shruthi-controller ${talaSelected ? "selected" : ""}`}
          onClick={() => setTalaSelected(!talaSelected)}
        >
          <img
            src={JagateIcon}
            alt="icon"
            className="instrument-icon tala-icon"
          />
        </div>
        <div
          className={`shruthi-controller ${chendeSelected ? "selected" : ""}`}
          onClick={() => setChendeSelected(!chendeSelected)}
        >
          <img
            src={ChendeIcon}
            alt="icon"
            className="instrument-icon chende-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default shruthi;
