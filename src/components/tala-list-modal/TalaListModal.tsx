import "./TalaListModal.scss";
import { TalaInfo } from "../../constants/UiData";

interface TalaListModalProps {
  toggleTalaListModal: () => void;
}

const TalaListModal = (props: TalaListModalProps) => {
  const { toggleTalaListModal } = props;

  const prem = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="tala-list-modal" onClick={toggleTalaListModal}>
      <div className="tala-list-container">
        {TalaInfo.map((data) => (
          <div className="tala-info" onClick={prem}>
            <p className="tala-name">
              {data.talaName}
              <span className="tala-count">({data.talaCounts})</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalaListModal;
