import { useEffect, useState } from "react";
import usePlayTala from "./usePlayBidita";
import usePlayChendeMuktaya from "./usePlayMuktaya";
import usePlayChende from "./usePlayAvarta";
import { HimmelaTerms } from "../utils/enum";
import {
  HimmelaPattern,
  setPlayingInfo,
} from "../store/slices/himmela-pattern";
import { RootState } from "../store/app-store";
import { useDispatch, useSelector } from "react-redux";

const usePlayHimmela = () => {
  const dispatch = useDispatch();
  const himmelaPattern = useSelector<RootState>(
    (state) => state.himmelaPattern.himmelaPattern
  ) as HimmelaPattern[];

  const [maxAvarta, setMaxAvarta] = useState(2);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [himmelaPlayPattern, setHimmelaPlayPattern] = useState<
    HimmelaPattern[]
  >([]);

  const { handleBidita, isBiditaCompleted } = usePlayTala();
  const { handleMuktaya, isMuktayaCompleted } = usePlayChendeMuktaya();
  const { handleAvarta, handleInfiniteAvarta, playCount } = usePlayChende();

  useEffect(() => {
    if (himmelaPlayPattern.length) {
      if (playCount > maxAvarta) {
        if (himmelaPlayPattern[0].type === HimmelaTerms.Bidita) {
          handlePlayPattern(true);
          setHimmelaPlayPattern(himmelaPlayPattern.slice(1));
          setPlayingIndex(playingIndex + 1);
        } else if (himmelaPlayPattern[0].type === HimmelaTerms.Muktaya) {
          handlePlayPattern(true);
          setHimmelaPlayPattern(himmelaPlayPattern.slice(1));
          setPlayingIndex(playingIndex + 1);
        }
      }
    }
  }, [playCount]);

  useEffect(() => {
    dispatch(
      setPlayingInfo({
        count: playCount,
        term: himmelaPattern[playingIndex],
      })
    );
    console.log("Sansa", himmelaPlayPattern);
  }, [playCount, playingIndex, himmelaPlayPattern]);

  useEffect(() => {
    if (himmelaPlayPattern.length) {
      if (
        (isBiditaCompleted || isMuktayaCompleted) &&
        himmelaPlayPattern[0].type === HimmelaTerms.Avarta
      ) {
        setMaxAvarta(himmelaPlayPattern[0].count ?? 0);
        handlePlayPattern(true);
        setHimmelaPlayPattern(himmelaPlayPattern.slice(1));
        setPlayingIndex(playingIndex + 1);
      }
    } else {
      handlePlayPattern(false);
    }
  }, [isBiditaCompleted, isMuktayaCompleted]);

  const handlePlayPattern = (isPlaying: boolean) => {
    let pattern = !himmelaPlayPattern.length
      ? himmelaPattern[0]
      : himmelaPlayPattern[0];

    if (!isPlaying) {
      pattern = himmelaPattern[himmelaPattern.length - 1];
    }

    switch (pattern?.type) {
      case HimmelaTerms.Avarta:
        handleAvarta(isPlaying, pattern.count ?? 0);
        return;
      case HimmelaTerms.Bidita:
        handleBidita(isPlaying);
        return;
      case HimmelaTerms.Muktaya:
        handleMuktaya(isPlaying);
        return;
    }
  };

  const handlePlayAvarta = (isPlaying: boolean) => {
    if (himmelaPattern.length) {
      handlePlayPattern(isPlaying);
      setMaxAvarta(himmelaPattern[0].count ?? 0);
      setHimmelaPlayPattern(himmelaPattern.slice(1));
    }
  };

  return {
    handleInfiniteAvarta,
    handlePlayAvarta,
    playingPatternInfo: {
      playCount,
      term: himmelaPlayPattern[0],
    },
  };
};

export default usePlayHimmela;
