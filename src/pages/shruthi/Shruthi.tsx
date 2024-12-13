import "./Shruthi.scss";
import CircleWave from "../../components/circle-wave/CircleWave";
import ShruthiCard from "../../components/shruthi-card/ShruthiCard";
import ShruthiSelector from "../../components/shruthi-selector/ShruthiSelector";
import { YakshaMan } from "../../utils/assets";
import { TanpuraTypes } from "../../constants/UiData";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPitch, selectTanpura } from "../../store/slices/selection-slice";
import useNotation, { MusicNotation } from "../../hooks/useNotation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { setIsPlayingTanpura } from "../../store/slices/play-control";
import { RootState } from "../../store/app-store";

const Shruthi = () => {
  const dispatch = useDispatch();
  const isPlayingTanpura =
    useSelector<RootState>((state) => state.playControl.isPlayingTanpura) ??
    false;

  const [selectTanpuraType, setSelectTanpuraType] = useState(
    TanpuraTypes[0].key
  );

  const { handlePlayPause, onSelectNewNote } = useNotation();

  const onSelectTanpura = (key: string) => {
    setSelectTanpuraType(key);
    dispatch(selectTanpura(key));
  };

  const onSelectFrequency = (musicNotation: MusicNotation) => {
    dispatch(selectPitch(musicNotation));
    onSelectNewNote(musicNotation);
  };

  const handlePlayTanpura = () => {
    dispatch(setIsPlayingTanpura(!isPlayingTanpura));
    handlePlayPause();
  };

  return (
    <div className="shruthi">
      <div className="player-animation">
        {isPlayingTanpura && <CircleWave />}
        <img src={YakshaMan} alt="img" className="player-placeholder" />
      </div>
      <div className="shruthi-selector">
        <ShruthiSelector selectFrequency={onSelectFrequency} />
      </div>
      <div className="shruthi-cards">
        {TanpuraTypes.map((data) => (
          <ShruthiCard
            key={data.key}
            tanpuraKey={data.key}
            title={data.title}
            isSelected={selectTanpuraType === data.key}
            selectTanpura={() => onSelectTanpura(data.key)}
          />
        ))}
      </div>

      <div className="shruthi-controller-container">
        <div className="shruthi-controller" onClick={() => handlePlayTanpura()}>
          {isPlayingTanpura && (
            <FontAwesomeIcon
              icon={faPause}
              className="instrument-icon tanpura-icon"
            />
          )}
          {!isPlayingTanpura && (
            <FontAwesomeIcon
              icon={faPlay}
              className="instrument-icon tanpura-icon play"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Shruthi;
