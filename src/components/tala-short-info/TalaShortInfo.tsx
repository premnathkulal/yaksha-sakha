import "./TalaShortInfo.scss";
import { TalaInfo } from "../../constants/UiData";

const TalaShortInfo = () => {
  const talaInfo = TalaInfo[1];

  return (
    <div className="tala-short-info">
      <div className="tala-selection">
        <div className="tala-name">
          {talaInfo.talaName}
          <span className="tala-count"> ({talaInfo.talaCounts})</span>
        </div>
      </div>
      <div className="tala-maatra">
        {talaInfo.talaStructure.map((data) =>
          data === 2 ? (
            <div className="tala-guru">2</div>
          ) : (
            <div className="tala-laghu">1</div>
          )
        )}
      </div>
      <div className="tala-rep">
        {talaInfo.talaStructure.map((data, index) =>
          data === 2 ? (
            <div className="tala-guru">
              {talaInfo.talaRepresentation[index]}
            </div>
          ) : (
            <div className="tala-laghu">
              {talaInfo.talaRepresentation[index]}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TalaShortInfo;
