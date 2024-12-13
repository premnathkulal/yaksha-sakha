import "./Himmela.scss";
import { useState } from "react";
import TalaShortInfo from "../../components/select-tala/SelectTala";
import SetHimmelaPattern from "../../components/himmela-player/HimmelaPlayer";

const Himmela = () => {
  const [selectedTalaId, setSelectedTalaId] = useState("tala-eka");

  const onSelectTala = (id: string) => {
    setSelectedTalaId(id);
  };

  return (
    <div className="himmela">
      <TalaShortInfo
        selectedTalaId={selectedTalaId}
        selectTala={onSelectTala}
      />
      <SetHimmelaPattern />
    </div>
  );
};

export default Himmela;
