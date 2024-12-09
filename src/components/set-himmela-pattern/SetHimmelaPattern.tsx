import "./SetHimmelaPattern.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AvartaListModal from "../avarta-list-modal/AvartaListModal";

export interface SelectedTerms {
  id: string;
  title: string;
  count?: number;
}

export interface AvartaShortInfoProps {
  playInfiniteLoop: () => void;
}

const AvartaShortInfo = (props: AvartaShortInfoProps) => {
  const { playInfiniteLoop } = props;
  const [showAvartaList, setShowAvartaList] = useState(false);
  const [playInfinite, setPlayInfinite] = useState(true);
  const [selectedTerms, setSelectedTerms] = useState<SelectedTerms[]>([]);
  // [
  //   {
  //     id: "random-1",
  //     title: "Avarta",
  //     count: "4",
  //   },
  //   {
  //     id: "random-2",
  //     title: "Bidita",
  //   },
  //   {
  //     id: "random-3",
  //     title: "Avarta",
  //     count: "4",
  //   },
  //   {
  //     id: "random-4",
  //     title: "Bidita",
  //   },
  //   {
  //     id: "random-3",
  //     title: "Avarta",
  //     count: "4",
  //   },
  //   {
  //     id: "random-7",
  //     title: "Bidita",
  //   },
  //   {
  //     id: "random-8",
  //     title: "Avarta",
  //     count: "2",
  //   },
  //   {
  //     id: "random-6",
  //     title: "Muktaya",
  //   },
  // ];

  const toggleShowAvartaList = () => {
    setShowAvartaList(!showAvartaList);
  };

  const handleSelectedTerms = (data: SelectedTerms) => {
    setSelectedTerms([...selectedTerms, data]);
  };

  const handlePlayingType = () => {
    setPlayInfinite(!playInfinite);
    if (playInfinite) {
      playInfiniteLoop();
      return;
    }
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
        <div
          className={`himmela-ctrl-btn ${!playInfinite ? "disabled" : ""}`}
          onClick={handlePlayingType}
        >
          Infinite Avarta
        </div>
        <div
          className={`himmela-ctrl-btn ${playInfinite ? "disabled" : ""}`}
          onClick={handlePlayingType}
        >
          Set Avarta Manually
        </div>
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
      <div className="avarta-chits-container">
        {!!selectedTerms.length && (
          <div className="avarta-chits-list">
            {selectedTerms.map((data) => (
              <span className="avarta-chips" key={data.id}>
                {data.title}
                {data.count && <span className="count"> ({data.count})</span>}
              </span>
            ))}
          </div>
        )}
        {!!selectedTerms.length && (
          <div className="current-playing-avarta-info">
            Avarta - <span className="cycle-count">4</span>
          </div>
        )}
      </div>
      {showAvartaList && (
        <AvartaListModal
          toggleAvartaListModal={toggleShowAvartaList}
          selectAvarta={handleSelectedTerms}
        />
      )}
    </div>
  );
};

export default AvartaShortInfo;
