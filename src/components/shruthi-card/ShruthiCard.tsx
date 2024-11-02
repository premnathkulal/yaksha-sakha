import "./ShruthiCard.scss";
import { YakshaMan, TanpuraGirl, Tanpura } from "../../utils/assets";

interface ShruthiCardProps {
  tanpuraKey: string;
  title: string;
}

const ShruthiCard = ({ tanpuraKey, title }: ShruthiCardProps) => {
  const TanpuraImage = (key: string) => {
    switch (key) {
      case "yaksha-low":
        return YakshaMan;
      case "tanpura-pa":
        return TanpuraGirl;
      default:
        return Tanpura;
    }
  };

  return (
    <div className="shruthi-card-container">
      <div className="shruthi-card">
        <img
          src={TanpuraImage(tanpuraKey)}
          alt="img"
          className="shruthi-card-icon"
        />
      </div>
      <span className="shruthi-name">{title}</span>
    </div>
  );
};

export default ShruthiCard;
