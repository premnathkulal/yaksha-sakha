import "./TalaListModal.scss";
import { TalaInfo } from "../../constants/UiData";

interface TalaListModalProps {
  toggleTalaListModal: () => void;
  selectTala: (id: string) => void;
}

const TalaListModal = (props: TalaListModalProps) => {
  const { toggleTalaListModal, selectTala } = props;

  const onSelectTala = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    e.stopPropagation();
    selectTala(id);
    toggleTalaListModal();
  };

  return (
    <div className="tala-list-modal" onClick={toggleTalaListModal}>
      <div className="tala-list-container">
        {TalaInfo.map((data) => (
          <div
            key={data.id}
            className="tala-info"
            onClick={(e) => onSelectTala(e, data.id)}
          >
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
