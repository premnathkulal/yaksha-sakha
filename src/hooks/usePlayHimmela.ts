import { useEffect, useState } from "react";
import usePlayTala from "./usePlayBidita";
import usePlayChendeMuktaya from "./usePlayMuktaya";
import usePlayChende from "./usePlayAvarta";
import { HimmelaTerms } from "../utils/enum";

const maxAvarta = 2;
const playSteps = [
  HimmelaTerms.Avarta,
  HimmelaTerms.Bidita,
  HimmelaTerms.Avarta,
  HimmelaTerms.Bidita,
  HimmelaTerms.Avarta,
  HimmelaTerms.Muktaya,
];

const usePlayHimmela = () => {
  const [playingSteps, setPlayingSteps] = useState(playSteps.slice(1));
  const { handleBidita, isBiditaCompleted } = usePlayTala();
  const { handleMuktaya, isMuktayaCompleted } = usePlayChendeMuktaya();
  const { handleAvarta, handleInfiniteAvarta, playCount } = usePlayChende();

  useEffect(() => {
    if (playCount > maxAvarta) {
      if (playingSteps[0] === HimmelaTerms.Bidita) {
        handleBidita(true);
        setPlayingSteps(playingSteps.slice(1));
      } else if (playingSteps[0] === HimmelaTerms.Muktaya) {
        handleMuktaya(true);
        setPlayingSteps(playingSteps.slice(1));
      }
    }
  }, [playCount]);

  useEffect(() => {
    if (
      (isBiditaCompleted || isMuktayaCompleted) &&
      playingSteps[0] === HimmelaTerms.Avarta
    ) {
      handleAvarta(true, maxAvarta);
      setPlayingSteps(playingSteps.slice(1));
    }
  }, [isBiditaCompleted, isMuktayaCompleted]);

  return {
    handleInfiniteAvarta,
    handleAvarta,
    playCount,
  };
};

export default usePlayHimmela;
