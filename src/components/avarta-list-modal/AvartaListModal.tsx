import "./AvartaListModal.scss";
import { AvartaTypes } from "../../constants/UiData";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons/faCaretLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface AvartaListModalProps {
  toggleAvartaListModal: () => void;
  selectAvarta: (id: string) => void;
}

const AvartaListModal = (props: AvartaListModalProps) => {
  const [cycleCount, setCycleCount] = useState(2);
  const [showSetCycleOption, setShowSetCycleOption] = useState(false);

  const { toggleAvartaListModal, selectAvarta } = props;

  const onSelectAvarta = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    e.stopPropagation();
    selectAvarta(id);
    if (id === "avarta") {
      setShowSetCycleOption(true);
      return;
    }
    toggleAvartaListModal();
  };

  const toggleShowSetCycleOption = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowSetCycleOption(false);
    // toggleAvartaListModal();
  };

  const handleCycleCount = (
    e: React.MouseEvent<HTMLDivElement>,
    increase = false
  ) => {
    e.stopPropagation();
    if (increase) {
      setCycleCount(cycleCount + 1);
      return;
    }
    setCycleCount(cycleCount - 1);
  };

  return (
    <div className="tala-list-modal" onClick={toggleAvartaListModal}>
      <div className="tala-list-container">
        {!showSetCycleOption &&
          AvartaTypes.map((data) => (
            <div
              className="tala-info"
              onClick={(e) => onSelectAvarta(e, data.id)}
            >
              <p className="tala-name">{data.title}</p>
            </div>
          ))}
        {showSetCycleOption && (
          <div className="cycle-count-selector">
            <p className="title">Select number of cycles</p>
            <div className="cycle-count-container">
              <div
                className="cycle-count-ctrl"
                onClick={(e) => handleCycleCount(e, false)}
              >
                <FontAwesomeIcon icon={faCaretLeft} />
              </div>
              <div className="cycle-count">{cycleCount}</div>
              <div
                className="cycle-count-ctrl"
                onClick={(e) => handleCycleCount(e, true)}
              >
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
            </div>
            <div className="cycle-count-modal-ctrl">
              <div className="btn">Select</div>
              <div className="btn back-btn" onClick={toggleShowSetCycleOption}>
                Back
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvartaListModal;
