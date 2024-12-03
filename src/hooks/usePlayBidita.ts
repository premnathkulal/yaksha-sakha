import { useState } from "react";
import * as Tone from "tone";
import EkatalaBidita from "../assets/audio/chende-beats/ekatala-bidita.m4a";

const player = new Tone.Player({
  url: EkatalaBidita,
  autostart: false,
}).toDestination();

const usePlayBidita = () => {
  const [isPlaying, setIsPlaying] = useState<any>(false);
  const [isBiditaCompleted, setIsBiditaCompleted] = useState<any>(false);

  const handleBidita = (play: boolean) => {
    if (play) {
      playBidita();
    } else if (isPlaying) {
      pauseBidita();
    }
  };

  const playBidita = () => {
    player.start();
    setIsPlaying(true);
    player.onstop = () => {
      pauseBidita();
    };
  };

  const pauseBidita = () => {
    player.stop();
    setIsPlaying(false);
    setIsBiditaCompleted(true);
    setTimeout(() => {
      setIsBiditaCompleted(false);
    }, 1000);
  };

  return { handleBidita, isBiditaCompleted };
};

export default usePlayBidita;
