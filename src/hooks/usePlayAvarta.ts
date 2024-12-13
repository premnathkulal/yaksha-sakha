import { useState } from "react";
import * as Tone from "tone";
import Ektal from "../assets/audio/chende-beats/ekatala.m4a";

let player = new Tone.Player({
  url: Ektal,
  loop: true,
  autostart: false,
  // playbackRate: 1.5,
}).toDestination();

// soundTouch.tempo = 1.5; // 1.5x speed

// const pitchShift = new Tone.PitchShift({
//   pitch: 0, // Pitch shift in semitones (e.g., +5 semitones)
// });

// player.connect(pitchShift).toDestination();
// player.chain(pitchShift, Tone.Destination);

const usePlayAvarta = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [toneId, setToneId] = useState(0);
  const [playCount, setPlayCount] = useState(0);

  const handleInfiniteAvarta = (play: boolean) => {
    if (play) {
      handleInfiniteAvartaPlay();
    } else if (isPlaying) {
      handleInfiniteAvartaPause();
    }
  };

  const handleInfiniteAvartaPlay = () => {
    // player.connect(pitchShift).toDestination();
    player.start();
    setIsPlaying(true);
  };

  const handleInfiniteAvartaPause = () => {
    player.stop();
    setIsPlaying(false);
  };

  const handleAvarta = (play: boolean, totalAvarta: number) => {
    if (play) {
      handleAvartaPlay(totalAvarta);
    } else if (isPlaying) {
      handleAvartaPause();
    }
  };

  const handleAvartaPlay = (totalAvarta: number) => {
    setPlayCount(0);
    player.start();
    trackRepetitions(totalAvarta);
    setIsPlaying(true);
  };

  const handleAvartaPause = () => {
    player.stop();
    Tone.getTransport().stop();
    setIsPlaying(false);
    Tone.getTransport().clear(toneId);
  };

  const trackRepetitions = (totalAvarta: number) => {
    setPlayCount(0);
    const loopDuration = player.buffer.duration;

    if (toneId !== undefined) {
      Tone.getTransport().clear(toneId);
    }

    const toneIds = Tone.getTransport().scheduleRepeat(() => {
      setPlayCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount > totalAvarta) {
          handleAvartaPause();
        }
        return newCount;
      });
    }, loopDuration);
    setToneId(toneIds);
    Tone.getTransport().start();
  };

  return {
    handleInfiniteAvarta,
    handleAvarta,
    playCount,
  };
};

export default usePlayAvarta;
