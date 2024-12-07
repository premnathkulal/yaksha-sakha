import "./TalaShortInfo.scss";
import { TalaInfo } from "../../constants/UiData";
import { useEffect, useState } from "react";
import TalaListModal from "../tala-list-modal/TalaListModal";

interface TalaShortInfoProps {
  selectedTalaId: string;
  selectTala: (id: string) => void;
}

const TalaShortInfo = (props: TalaShortInfoProps) => {
  const { selectedTalaId, selectTala } = props;
  const [talaInfo, setTalaInfo] = useState(TalaInfo[0]);
  const [showTalaList, setShowTalaList] = useState(false);

  useEffect(() => {
    TalaInfo.forEach((data) => {
      if (data.id === selectedTalaId) {
        setTalaInfo(data);
      }
    });
  }, [selectedTalaId]);

  const toggleShowTalaList = () => {
    setShowTalaList(!showTalaList);
  };

  return (
    <div className="tala-short-info">
      <div className="tala-selection" onClick={toggleShowTalaList}>
        <div className="tala-name">
          {talaInfo.talaName}
          <span className="tala-count"> ({talaInfo.talaCounts})</span>
        </div>
      </div>
      <div className="tala-maatra">
        {talaInfo.talaStructure.map((data, index) =>
          data === 2 || typeof data === "string" ? (
            <div className="tala-guru" key={index}>
              {data}
            </div>
          ) : (
            <div className="tala-laghu" key={index}>
              {data}
            </div>
          )
        )}
      </div>
      <div className="tala-rep">
        {talaInfo.talaStructure.map((data, index) =>
          data === 2 || typeof data === "string" ? (
            <div className="tala-guru" key={index}>
              {talaInfo.talaRepresentation[index]}
            </div>
          ) : (
            <div className="tala-laghu" key={index}>
              {talaInfo.talaRepresentation[index]}
            </div>
          )
        )}
      </div>
      {showTalaList && (
        <TalaListModal
          toggleTalaListModal={toggleShowTalaList}
          selectTala={selectTala}
        />
      )}
    </div>
  );
};

export default TalaShortInfo;
