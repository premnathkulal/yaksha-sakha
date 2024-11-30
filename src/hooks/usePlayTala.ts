import { useState } from "react";
import * as Tone from "tone";
import EktalBidita from "../assets/audio/chende-beats/ekatala-bidita.m4a";

const player = new Tone.Player({
  url: EktalBidita, // Replace with your audio file URL
  // loop: true, // Enable looping
  autostart: false, // Do not autoplay initially
}).toDestination(); // Connect the player to the output (speakers)

const usePlayChendeBidita = () => {
  const [isPlaying, setIsPlaying] = useState<any>(false);
  const [isCompleted, setIsCompleted] = useState<any>(false);

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
    player.onstop = () => {
      handlePause();
    };
  };

  const handlePause = () => {
    player.stop();
    setIsPlaying(false);
    setIsCompleted(true);
    setTimeout(() => {
      setIsCompleted(false);
    });
  };

  return { handleTalaPlayPause, isCompleted };
};

export default usePlayChendeBidita;
