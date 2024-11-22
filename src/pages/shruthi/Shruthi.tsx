import "./Shruthi.scss";
import CircleWave from "../../components/circle-wave/CircleWave";
import ShruthiCard from "../../components/shruthi-card/ShruthiCard";
import ShruthiSelector from "../../components/shruthi-selector/ShruthiSelector";
import {
  ChendeIcon,
  TanpuraIcon,
  YakshaMan,
  JagateIcon,
} from "../../utils/assets";
import { TanpuraTypes } from "../../constants/UiData";
import { useEffect, useState } from "react";
import TalaShortInfo from "../../components/tala-short-info/TalaShortInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/app-store";
import { selectPitch, selectTanpura } from "../../store/slices/selection-slice";
import useNotation from "../../hooks/useNotation";
import usePlayTala from "../../hooks/usePlayTala";
import TalaListModal from "../../components/tala-list-modal/TalaListModal";

const shruthi = () => {
  const selectedTanpuraType = useSelector<RootState>(
    (state) => state.selections.selectedTanpuraType
  ) as string;
  const dispatch = useDispatch();

  const [selectedTanpura, setSelectedTanpura] = useState(TanpuraTypes[0].key);
  const [selectedFrequency, setSelectedFrequency] = useState(400);
  const [isTanpuraSelected, setIsTanpuraSelected] = useState(false);
  const [talaSelected, setTalaSelected] = useState(false);
  const [chendeSelected, setChendeSelected] = useState(false);

  const { handlePlayPause, onSelectNewNote } = useNotation();
  const { handleChendePlayPause } = usePlayTala();

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

  useEffect(() => {
    handleChendePlayPause(chendeSelected);
  }, [chendeSelected]);

  return (
    <div className="shruthi">
      <div className="player-animation">
        {(isTanpuraSelected || chendeSelected) && <CircleWave />}
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
      <TalaShortInfo />
      <div className="shruthi-controller-container">
        <div
          className={`shruthi-controller ${
            isTanpuraSelected ? "selected" : ""
          }`}
          onClick={() => handlePlayTanpura()}
        >
          <img
            src={TanpuraIcon}
            alt="icon"
            className="instrument-icon tanpura-icon"
          />
        </div>
        <div
          className={`shruthi-controller ${talaSelected ? "selected" : ""}`}
          onClick={() => setTalaSelected(!talaSelected)}
        >
          <img
            src={JagateIcon}
            alt="icon"
            className="instrument-icon tala-icon"
          />
        </div>
        <div
          className={`shruthi-controller ${chendeSelected ? "selected" : ""}`}
          onClick={() => setChendeSelected(!chendeSelected)}
        >
          <img
            src={ChendeIcon}
            alt="icon"
            className="instrument-icon chende-icon"
          />
        </div>
      </div>
      <TalaListModal />
    </div>
  );
};

export default shruthi;
