import { useEffect, useState } from "react";
import * as Tone from "tone";
import EktalBidita from "../assets/audio/chende-beats/ekatala-bidita.m4a";

const player = new Tone.Player({
  url: EktalBidita, // Replace with your audio file URL
  // loop: true, // Enable looping
  autostart: false, // Do not autoplay initially
}).toDestination(); // Connect the player to the output (speakers)

const usePlayChendeBidita = () => {
  const [isPlaying, setIsPlaying] = useState<any>(false);
  const [end, setEnd] = useState<any>(false);

  const handleTalaPlayPause = (play: boolean) => {
    if (play) {
      handlePlay();
    } else if (isPlaying) {
      handlePause();
    }
  };

  const handlePlay = () => {
    player.start();
    setIsPlaying(true);
  };

  const handlePause = () => {
    player.stop();
    setIsPlaying(false);
  };

  const onSelectNewTala = () => {
    handlePause();
    setTimeout(() => {
      handlePlay();
    }, 0);
  };

  return { handleTalaPlayPause, onSelectNewTala, end };
};

export default usePlayChendeBidita;
