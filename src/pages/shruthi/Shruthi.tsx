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
import * as Tone from "tone";

const shruthi = () => {
  const selectedTanpuraType = useSelector<RootState>(
    (state) => state.selections.selectedTanpuraType
  ) as string;
  const dispatch = useDispatch();

  const [selectedTanpura, setSelectedTanpura] = useState(TanpuraTypes[0].key);
  const [selectedPitch, setSelectedPitch] = useState("C");
  const [isTanpuraSelected, setIsTanpuraSelected] = useState(false);
  const [talaSelected, setTalaSelected] = useState(false);
  const [chendeSelected, setChendeSelected] = useState(false);
  const [isPlaying, setIsPlaying] = useState<any>(false);

  const mySynth = new Tone.Synth().toDestination();
  const [synth, setSynth] = useState(mySynth);

  const onSelectTanpura = (key: string) => {
    setSelectedTanpura(key);
    dispatch(selectTanpura(key));
  };

  const onSelectPitch = (pitch: string) => {
    setSelectedPitch(pitch);
    dispatch(selectPitch(pitch));
  };

  const handlePlay = () => {
    if (synth) {
      synth.triggerAttack(`${selectedPitch}4`, "2n");
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (synth) {
      synth.triggerRelease();
      setIsPlaying(false);
    }
  };

  const handlePlayTanpura = () => {
    setIsTanpuraSelected(!isTanpuraSelected);
  };

  useEffect(() => {
    if (isTanpuraSelected) {
      handlePlay();
    } else if (isPlaying) {
      handleStop();
    }
  }, [isTanpuraSelected]);

  useEffect(() => {
    if (isTanpuraSelected) {
      handleStop();
      handlePlay();
    }
  }, [selectedPitch]);

  useEffect(() => {
    const newSynth = new Tone.Synth().toDestination();
    setSynth(newSynth);
    return () => {
      newSynth.dispose();
    };
  }, []);

  return (
    <div className="shruthi">
      <div className="player-animation">
        <CircleWave />
        <img src={YakshaMan} alt="img" className="player-placeholder" />
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
      <div className="shruthi-selector">
        <ShruthiSelector selectPitch={onSelectPitch} />
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
    </div>
  );
};

export default shruthi;
