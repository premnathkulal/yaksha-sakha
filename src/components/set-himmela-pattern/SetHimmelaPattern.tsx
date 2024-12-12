import "./SetHimmelaPattern.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AvartaListModal from "../avarta-list-modal/AvartaListModal";
import { useDispatch, useSelector } from "react-redux";
import {
  HimmelaPattern,
  PlayingTerm,
  setHimmelaPattern,
} from "../../store/slices/himmela-pattern";
import { RootState } from "../../store/app-store";
import { HimmelaTerms } from "../../utils/enum";

export interface AvartaShortInfoProps {
  playInfiniteLoop: () => void;
}

const AvartaShortInfo = (props: AvartaShortInfoProps) => {
  const { playInfiniteLoop } = props;
  const dispatch = useDispatch();

  const himmelaPattern = useSelector<RootState>(
    (state) => state.himmelaPattern.himmelaPattern
  ) as HimmelaPattern[];

  const playingInfo = useSelector<RootState>(
    (state) => state.himmelaPattern.playingInformation
  ) as PlayingTerm;

  const [showAvartaList, setShowAvartaList] = useState(false);
  const [playInfinite, setPlayInfinite] = useState(true);

  const toggleShowAvartaList = () => {
    setShowAvartaList(!showAvartaList);
  };

  const handleSelectedTerms = (data: HimmelaPattern) => {
    dispatch(setHimmelaPattern(data));
  };

  const handlePlayingType = () => {
    setPlayInfinite(!playInfinite);
    if (playInfinite) {
      playInfiniteLoop();
      return;
    }
  };

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
        {!!himmelaPattern.length && (
          <div className="avarta-chits-list">
            {himmelaPattern.map((data) => (
              <span className="avarta-chips" key={data.id}>
                {data.title}
                {data.count && <span className="count"> ({data.count})</span>}
              </span>
            ))}
          </div>
        )}
        {!!himmelaPattern.length && (
          <div className="current-playing-avarta-info">
            {playingInfo.term?.title}
            {playingInfo.count > 0 &&
              playingInfo.term?.type === HimmelaTerms.Avarta && (
                <span className="cycle-count"> - {playingInfo.count}</span>
              )}
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
