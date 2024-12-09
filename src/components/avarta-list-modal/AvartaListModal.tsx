import "./AvartaListModal.scss";
import { AvartaTypes } from "../../constants/UiData";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons/faCaretLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { SelectedTerms } from "../set-himmela-pattern/SetHimmelaPattern";

interface AvartaListModalProps {
  toggleAvartaListModal: () => void;
  selectAvarta: (data: SelectedTerms) => void;
}

interface AvartaTypes {
  id: string;
  title: string;
  isCountRequired: boolean;
}

const AvartaListModal = (props: AvartaListModalProps) => {
  const [cycleCount, setCycleCount] = useState(2);
  const [showSetCycleOption, setShowSetCycleOption] = useState(false);
  const [selectedAvarta, setSelectedAvarta] = useState<SelectedTerms>();

  const { toggleAvartaListModal, selectAvarta } = props;

  const generateRandomId = () => {
    // Generate a random ID using a combination of Date, Math.random, and crypto for extra randomness
    const randomId =
      Date.now().toString(36) + // Current timestamp in base36
      Math.random().toString(36).substring(2, 15) + // Random number in base36
      crypto.getRandomValues(new Uint32Array(1))[0].toString(36); // Strong random number

    return randomId;
  };

  const onSelectAvarta = async (
    e: React.MouseEvent<HTMLDivElement>,
    data: AvartaTypes
  ) => {
    e.stopPropagation();
    const userSelectedAvarta = {
      id: generateRandomId(),
      title: data.title,
    };
    if (data.id !== "avarta") {
      selectAvarta(userSelectedAvarta);
      toggleAvartaListModal();
      return;
    }
    setSelectedAvarta(userSelectedAvarta);
    setShowSetCycleOption(true);
  };

  const toggleShowSetCycleOption = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowSetCycleOption(false);
    if (selectedAvarta) {
      selectedAvarta.count = cycleCount;
      selectAvarta(selectedAvarta);
    }
    toggleAvartaListModal();
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
              key={data.id}
              className="tala-info"
              onClick={(e) => onSelectAvarta(e, data)}
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
              <div className="btn" onClick={toggleShowSetCycleOption}>
                Select
              </div>
              <div
                className="btn back-btn"
                onClick={() => setShowSetCycleOption(false)}
              >
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
