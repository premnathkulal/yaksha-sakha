import "./HimmelaPlayer.scss";
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
import usePlayHimmela from "../../hooks/usePlayHimmela";
import {
  ChendeIcon,
  // JagateIcon
} from "../../utils/assets";

const AvartaShortInfo = () => {
  const dispatch = useDispatch();
  const { handlePlayAvarta, handleInfiniteAvarta } = usePlayHimmela();

  const himmelaPattern = useSelector<RootState>(
    (state) => state.himmelaPattern.himmelaPattern
  ) as HimmelaPattern[];

  const playingInfo = useSelector<RootState>(
    (state) => state.himmelaPattern.playingInformation
  ) as PlayingTerm;

  const [showAvartaList, setShowAvartaList] = useState(false);
  const [playInfinite, setPlayInfinite] = useState(true);
  const [chendeSelected, setChendeSelected] = useState(false);

  const toggleShowAvartaList = () => {
    setShowAvartaList(!showAvartaList);
  };

  const handleSelectedTerms = (data: HimmelaPattern) => {
    dispatch(setHimmelaPattern(data));
  };

  const handlePlayingType = (chendeSelected: boolean) => {
    setChendeSelected(chendeSelected);
    playInfinite
      ? handleInfiniteAvarta(chendeSelected)
      : handlePlayAvarta(chendeSelected);
  };

  return (
    <div className="himmela-player">
      <div className="himmela-ctrl-btn-container">
        <div
          className={`himmela-ctrl-btn ${!playInfinite ? "disabled" : ""}`}
          onClick={() => !playInfinite && setPlayInfinite(!playInfinite)}
        >
          Infinite Avarta
        </div>
        <div
          className={`himmela-ctrl-btn ${playInfinite ? "disabled" : ""}`}
          onClick={() => playInfinite && setPlayInfinite(!playInfinite)}
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
      <div className="himmela-controller-container">
        {/* <div
          className={`himmela-controller ${talaSelected ? "selected" : ""}`}
          onClick={() => {}}
        >
          <img
            src={JagateIcon}
            alt="icon"
            className="instrument-icon tala-icon"
          />
        </div>
        <div
          className={`himmela-controller ${talaSelected ? "selected" : ""}`}
          onClick={() => {}}
        >
          <img
            src={JagateIcon}
            alt="icon"
            className="instrument-icon tala-icon"
          />
        </div> */}
        <div
          className={`himmela-controller ${chendeSelected ? "selected" : ""}`}
          onClick={() => handlePlayingType(!chendeSelected)}
        >
          <img
            src={ChendeIcon}
            alt="icon"
            className="instrument-icon chende-icon"
          />
        </div>
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
