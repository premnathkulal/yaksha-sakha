import "./SetHimmelaPattern.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AvartaListModal from "../avarta-list-modal/AvartaListModal";

interface AvartaShortInfoProps {
  selectedAvartaId: string;
  selectAvarta: (id: string) => void;
}

const AvartaShortInfo = (props: AvartaShortInfoProps) => {
  const { selectedAvartaId, selectAvarta } = props;
  const [showAvartaList, setShowAvartaList] = useState(false);

  const toggleShowAvartaList = () => {
    setShowAvartaList(!showAvartaList);
  };

  // useEffect(() => {
  //   TalaInfo.forEach((data) => {
  //     if (data.id === selectedTalaId) {
  //       setTalaInfo(data);
  //     }
  //   });
  // }, [selectedTalaId]);

  return (
    <div className="set-himmela-pattern">
      <div className="himmela-ctrl-btn-container">
        <div className="himmela-ctrl-btn">Infinite Avarta</div>
        <div className="himmela-ctrl-btn disabled">Set Avarta Manually</div>
      </div>
      <div className="avarta-list-container">
        <div
          className="himmela-ctrl-btn add-input-box"
          onClick={toggleShowAvartaList}
        >
          Select Sansa
        </div>
        <div className="himmela-ctrl-btn disabled add-btn">
          <FontAwesomeIcon icon={faPlus} color="white" />
        </div>
      </div>
      {showAvartaList && (
        <AvartaListModal
          toggleAvartaListModal={toggleShowAvartaList}
          selectAvarta={selectAvarta}
        />
      )}
    </div>
  );
};

export default AvartaShortInfo;
