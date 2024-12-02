import { useEffect, useState } from "react";
import usePlayTala from "./usePlayTala";
import usePlayChendeMuktaya from "./usePlayMuktaya";
import usePlayChende from "./usePlayChende";

const enum BeatTerms {
  Avarta = "avarta",
  Bidita = "bidita",
  Muktaya = "muktaya",
}

const maxAvarta = 1;
const playSteps = [
  BeatTerms.Avarta,
  BeatTerms.Bidita,
  BeatTerms.Avarta,
  BeatTerms.Bidita,
  BeatTerms.Avarta,
  BeatTerms.Muktaya,
];

const usePlayHimmela = () => {
  const [playingSteps, setPlayingSteps] = useState(playSteps.slice(1));

  const { handleTalaPlayPause, isCompleted } = usePlayTala();
  const { handleTalaPlayPauseMuk } = usePlayChendeMuktaya();
  const { handleChendePlayPauseInCount, handleChendePlayPause, playCount } =
    usePlayChende();

  useEffect(() => {
    if (playCount > maxAvarta && playingSteps[0] === BeatTerms.Bidita) {
      console.log("Sansa Bidita", playingSteps);
      handleTalaPlayPause(true);
      setPlayingSteps(playingSteps.slice(1));
    } else if (playCount > maxAvarta && playingSteps[0] === BeatTerms.Muktaya) {
      console.log("Sansa Muktaya", playingSteps);
      handleTalaPlayPauseMuk(true);
      setPlayingSteps(playingSteps.slice(1));
    }
  }, [playCount]);

  useEffect(() => {
    if (isCompleted && playingSteps[0] === BeatTerms.Avarta) {
      console.log("Sansa Avarta", playingSteps, playCount);
      handleChendePlayPauseInCount(true);
      setPlayingSteps(playingSteps.slice(1));
    }
  }, [isCompleted]);

  return {
    handleChendePlayPause,
    handleChendePlayPauseInCount,
    playCount,
  };
};

export default usePlayHimmela;
