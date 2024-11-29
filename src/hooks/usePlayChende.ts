import { useEffect, useState } from "react";
import * as Tone from "tone";
import Ektal from "../assets/audio/chende-beats/ekatala.m4a";
import usePlayTala from "../hooks/usePlayTala";
import usePlayChendeMuktaya from "../hooks/usePlayMuktaya";

const player = new Tone.Player({
  url: Ektal, // Replace with your audio file URL
  loop: true, // Enable looping
  autostart: false, // Do not autoplay initially
}).toDestination();

const usePlayChende = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [toneId, setToneId] = useState(0);
  const [isBeforeBidita, setIsBeforeBiditasetToneId] = useState(false);

  const { handleTalaPlayPause, end } = usePlayTala();
  const { handleTalaPlayPauseMuk } = usePlayChendeMuktaya();

  useEffect(() => {
    if (playCount > 1 && isBeforeBidita) {
      handleTalaPlayPause(true);
      setTimeout(() => {
        setPlayCount(-1);
      }, 16600);
    } else if (playCount > 1) {
      handleTalaPlayPauseMuk(true);
    }
  }, [playCount]);

  useEffect(() => {
    if (end) {
      setPlayCount(-1);
    }
  }, [end]);

  useEffect(() => {
    if (playCount === -1) {
      setPlayCount(0);
      handleChendePlayPauseInCount(true, false);
    }
  }, [playCount]);

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

  const handleChendePlayPauseInCount = (
    play: boolean,
    beforeBidita: boolean
  ) => {
    setIsBeforeBiditasetToneId(beforeBidita);
    if (play) {
      handlePlayInCount();
    } else if (isPlaying) {
      handlePauseInCount();
    }
  };

  const handlePlayInCount = () => {
    if (player) {
      setPlayCount(0); // Reset play count
      player.start();
      trackRepetitions();
      setIsPlaying(true);
    }
  };

  const handlePauseInCount = () => {
    if (player) {
      player.stop();
      Tone.getTransport().stop(); // Ensure Transport stops
      setIsPlaying(false);
      Tone.getTransport().clear(toneId);
    }
  };

  const onSelectNewTala = () => {
    handlePause();
    setTimeout(() => {
      handlePlay();
    }, 0);
  };

  const trackRepetitions = () => {
    setPlayCount(0);
    const loopDuration = player.buffer.duration; // Get the duration of the audio
    // Use Tone.Transport to trigger repetitions
    const toneIds = Tone.getTransport().scheduleRepeat(() => {
      setPlayCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount > 1) {
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
