import { useState } from "react";
import * as Tone from "tone";
import Ektal from "../assets/audio/chende-beats/ekatala.m4a";

const player = new Tone.Player({
  url: Ektal, // Replace with your audio file URL
  loop: true, // Enable looping
  autostart: false, // Do not autoplay initially
}).toDestination(); // Connect the player to the output (speakers)

const usePlayTala = () => {
  const [isPlaying, setIsPlaying] = useState<any>(false);

  const handleChendePlayPause = (play: boolean) => {
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

  return { handleChendePlayPause, onSelectNewTala };
};

export default usePlayTala;
