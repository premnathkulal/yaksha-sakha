import { useState } from "react";
import * as Tone from "tone";
import Ektal from "../assets/audio/chende-beats/ekatala.m4a";

let player = new Tone.Player({
  url: Ektal, // Replace with your audio file URL
  loop: true, // Enable looping
  autostart: false, // Do not autoplay initially
}).toDestination();

const maxAvarta = 2;

const usePlayChende = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [toneId, setToneId] = useState(0);

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

  const handleChendePlayPauseInCount = (play: boolean) => {
    if (play) {
      handlePlayInCount();
    } else if (isPlaying) {
      handlePauseInCount();
    }
  };

  const handlePlayInCount = () => {
    setPlayCount(0);
    player.start();
    trackRepetitions();
    setIsPlaying(true);
  };

  const handlePauseInCount = () => {
    player.stop();
    Tone.getTransport().stop(); // Ensure Transport stops
    setIsPlaying(false);
  };

  const onSelectNewTala = () => {
    handlePause();
    setTimeout(() => {
      handlePlay();
    }, 0);
  };

  const trackRepetitions = () => {
    setPlayCount(0);
    const loopDuration = player.buffer.duration;

    if (toneId !== undefined) {
      Tone.getTransport().clear(toneId);
    }

    const toneIds = Tone.getTransport().scheduleRepeat(() => {
      setPlayCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount > maxAvarta) {
          handlePauseInCount();
        }
        return newCount;
      });
    }, loopDuration);
    setToneId(toneIds);
    Tone.getTransport().start();
  };

  return {
    handleChendePlayPause,
    handleChendePlayPauseInCount,
    onSelectNewTala,
    playCount,
  };
};

export default usePlayChende;
