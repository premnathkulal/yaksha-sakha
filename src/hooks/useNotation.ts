import { useState } from "react";
import * as Tone from "tone";

const synth = new Tone.PolySynth(Tone.Synth, {
  oscillator: {
    type: "sawtooth15", // Sawtooth for harmonium-like timbre
  },
  envelope: {
    attack: 3, // Gradual start
    decay: 0.2, // Smooth decay
    sustain: 0.8, // Sustain level
    release: 3, // Natural release
  },
}).toDestination();
synth.set({
  detune: -10, // Slightly detune one of the oscillators
});

// Add a lowpass filter to smooth out high frequencies
const filter = new Tone.Filter({
  type: "lowpass",
  frequency: 2000, // Cutoff frequency
  Q: 1, // Resonance
}).toDestination();

synth.connect(filter);

const useNotation = () => {
  const [isPlaying, setIsPlaying] = useState<any>(false);

  const handlePlayPause = (play: boolean) => {
    if (play) {
      handlePlay();
    } else if (isPlaying) {
      handlePause();
    }
  };

  const handlePlay = (newPitchFrequency = 400) => {
    synth.triggerAttackRelease(newPitchFrequency, "0n");
    setIsPlaying(true);
  };

  const handlePause = () => {
    synth.releaseAll();
    setIsPlaying(false);
  };

  const onSelectNewNote = (newPitchFrequency: number) => {
    handlePause();
    setTimeout(() => {
      handlePlay(newPitchFrequency);
    }, 0);
  };

  return { handlePlayPause, onSelectNewNote };
};

export default useNotation;
