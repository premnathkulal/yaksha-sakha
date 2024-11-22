import "./TalaShortInfo.scss";
import { TalaInfo } from "../../constants/UiData";

interface TalaShortInfoProps {
  showTalaList: () => void;
}

const TalaShortInfo = (props: TalaShortInfoProps) => {
  const { showTalaList } = props;
  const talaInfo = TalaInfo[0];

  return (
    <div className="tala-short-info">
      <div className="tala-selection" onClick={showTalaList}>
        <div className="tala-name">
          {talaInfo.talaName}
          <span className="tala-count"> ({talaInfo.talaCounts})</span>
        </div>
      </div>
      <div className="tala-maatra">
        {talaInfo.talaStructure.map((data, index) =>
          data === 2 ? (
            <div className="tala-guru" key={index}>
              2
            </div>
          ) : (
            <div className="tala-laghu" key={index}>
              1
            </div>
          )
        )}
      </div>
      <div className="tala-rep">
        {talaInfo.talaStructure.map((data, index) =>
          data === 2 ? (
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
    </div>
  );
};

export default TalaShortInfo;
