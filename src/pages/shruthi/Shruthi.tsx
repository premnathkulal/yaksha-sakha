import "./Shruthi.scss";
import CircleWave from "../../components/circle-wave/CircleWave";
import ShruthiCard from "../../components/shruthi-card/ShruthiCard";
import ShruthiSelector from "../../components/shruthi-selector/ShruthiSelector";
import { YakshaMan } from "../../utils/assets";
import { TanpuraTypes } from "../../constants/UiData";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectPitch, selectTanpura } from "../../store/slices/selection-slice";
import useNotation from "../../hooks/useNotation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const Shruthi = () => {
  const dispatch = useDispatch();

  const [selectedTanpura, setSelectedTanpura] = useState(TanpuraTypes[0].key);
  const [selectedFrequency, setSelectedFrequency] = useState(329.63);
  const [isTanpuraSelected, setIsTanpuraSelected] = useState(false);

  const { handlePlayPause, onSelectNewNote } = useNotation();

  const onSelectTanpura = (key: string) => {
    setSelectedTanpura(key);
    dispatch(selectTanpura(key));
  };

  const onSelectFrequency = (pitch: number) => {
    setSelectedFrequency(pitch);
    dispatch(selectPitch(pitch));
  };

  const handlePlayTanpura = () => {
    setIsTanpuraSelected(!isTanpuraSelected);
  };

  useEffect(() => {
    handlePlayPause(isTanpuraSelected);
  }, [isTanpuraSelected]);

  useEffect(() => {
    if (isTanpuraSelected) {
      onSelectNewNote(selectedFrequency);
    }
  }, [selectedFrequency]);

  return (
    <div className="shruthi">
      <div className="player-animation">
        {isTanpuraSelected && <CircleWave />}
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
            isSelected={selectedTanpura === data.key}
            selectTanpura={() => onSelectTanpura(data.key)}
          />
        ))}
      </div>

      <div className="shruthi-controller-container">
        <div className="shruthi-controller" onClick={() => handlePlayTanpura()}>
          {isTanpuraSelected && (
            <FontAwesomeIcon
              icon={faPause}
              className="instrument-icon tanpura-icon"
            />
          )}
          {!isTanpuraSelected && (
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
