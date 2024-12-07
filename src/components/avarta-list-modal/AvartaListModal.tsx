import "./AvartaListModal.scss";
import { TalaInfo } from "../../constants/UiData";

interface AvartaListModalProps {
  toggleAvartaListModal: () => void;
  selectAvarta: (id: string) => void;
}

const AvartaListModal = (props: AvartaListModalProps) => {
  const { toggleAvartaListModal, selectAvarta } = props;

  const onSelectAvarta = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    e.stopPropagation();
    selectAvarta(id);
    toggleAvartaListModal();
  };

  return (
    <div className="tala-list-modal" onClick={toggleAvartaListModal}>
      <div className="tala-list-container">
        {TalaInfo.map((data) => (
          <div
            className="tala-info"
            onClick={(e) => onSelectAvarta(e, data.id)}
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

export default AvartaListModal;
