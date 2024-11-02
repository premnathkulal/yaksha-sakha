import "./Shruthi.scss";
import CircleWave from "../components/circle-wave/CircleWave";
import ShruthiCard from "../components/shruthi-card/ShruthiCard";
import { YakshaMan } from "../utils/assets";
import { MusicNotation, TanpuraTypes } from "../constants/UiData";

const shruthi = () => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default shruthi;
