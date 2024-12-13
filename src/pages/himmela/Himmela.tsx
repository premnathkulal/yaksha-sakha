import "./Himmela.scss";
import { useState } from "react";
import TalaShortInfo from "../../components/select-tala/SelectTala";
import SetHimmelaPattern from "../../components/himmela-player/HimmelaPlayer";

const Himmela = () => {
  const [selectedTalaId, setSelectedTalaId] = useState("tala-eka");
  const [playInfinite, setPlayInfinite] = useState(true);

  const onSelectTala = (id: string) => {
    setSelectedTalaId(id);
  };

  const playInfiniteLoop = () => {
    setPlayInfinite(!playInfinite);
  };

  return (
    <div className="himmela">
      <TalaShortInfo
        selectedTalaId={selectedTalaId}
        selectTala={onSelectTala}
      />
      <SetHimmelaPattern playInfiniteLoop={playInfiniteLoop} />
    </div>
  );
};

export default Himmela;
