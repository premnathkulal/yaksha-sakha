import "./ShruthiCard.scss";
import { YakshaMan } from "../../utils/assets";

const ShruthiCard = () => {
  return (
    <div className="shruthi-card-container">
      <div className="shruthi-card">
        <img src={YakshaMan} alt="img" className="shruthi-card-icon" />
      </div>
      <span className="shruthi-name">Yaksha Low</span>
    </div>
  );
};

export default ShruthiCard;
