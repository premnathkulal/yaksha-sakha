import "./ShruthiCard.scss";
import { YakshaMan, TanpuraGirl, Tanpura } from "../../utils/assets";

interface ShruthiCardProps {
  tanpuraKey: string;
  title: string;
  isSelected: boolean;
  selectTanpura: (key: string) => void;
}

const ShruthiCard = ({
  tanpuraKey,
  title,
  isSelected,
  selectTanpura,
}: ShruthiCardProps) => {
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
    <div
      className="shruthi-card-container"
      onClick={() => selectTanpura(tanpuraKey)}
    >
      <div className={`shruthi-card ${isSelected ? "selected" : ""}`}>
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
