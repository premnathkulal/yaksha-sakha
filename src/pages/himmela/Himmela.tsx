import "./Himmela.scss";
import { useEffect, useState } from "react";
import { ChendeIcon, JagateIcon } from "../../utils/assets";
import TalaShortInfo from "../../components/select-tala/SelectTala";
import SetHimmelaPattern from "../../components/set-himmela-pattern/SetHimmelaPattern";
import usePlayHimmela from "../../hooks/usePlayHimmela";

const Himmela = () => {
  const [talaSelected, setTalaSelected] = useState(false);
  const [chendeSelected, setChendeSelected] = useState(false);
  const [selectedTalaId, setSelectedTalaId] = useState("tala-eka");
  const [playInfinite, setPlayInfinite] = useState(true);

  const { handlePlayAvarta, handleInfiniteAvarta } = usePlayHimmela();

  useEffect(() => {
    playInfinite
      ? handlePlayAvarta(chendeSelected)
      : handleInfiniteAvarta(chendeSelected);
  }, [chendeSelected]);

  const onSelectTala = (id: string) => {
    setSelectedTalaId(id);
  };

  const playInfiniteLoop = () => {
    setPlayInfinite(!playInfinite);
  };

  useEffect(() => {}, [talaSelected]);

  return (
    <div className="himmela">
      <TalaShortInfo
        selectedTalaId={selectedTalaId}
        selectTala={onSelectTala}
      />
      <SetHimmelaPattern playInfiniteLoop={playInfiniteLoop} />
      <div className="himmela-controller-container">
        <div
          className={`himmela-controller ${talaSelected ? "selected" : ""}`}
          onClick={() => setTalaSelected(!talaSelected)}
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
        </div>
        <div
          className={`himmela-controller ${chendeSelected ? "selected" : ""}`}
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

export default Himmela;
