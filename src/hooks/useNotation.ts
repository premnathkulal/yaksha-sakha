import { useSelector } from "react-redux";
import * as Tone from "tone";
import { RootState } from "../store/app-store";

export interface MusicNotation {
  id: string;
  indian: string;
  western: string;
  kannada: string;
  kannadaNotation: string;
  fullIndianTitle: string;
  frequency: string;
}

const synth = new Tone.PolySynth(Tone.Synth, {
  volume: -28,
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
  const isPlayingTanpura = useSelector<RootState>(
    (state) => state.playControl.isPlayingTanpura
  );

  const selectedNotationInfo = useSelector<RootState>(
    (state) => state.selections.selectedPitchInfo
  ) as MusicNotation;

  const handlePlayPause = () => {
    if (!isPlayingTanpura) {
      handlePlay();
    } else if (isPlayingTanpura) {
      handlePause();
    }
  };

  const handlePlay = (musicNotation?: MusicNotation) => {
    synth.triggerAttackRelease(
      musicNotation?.frequency ?? selectedNotationInfo.frequency,
      "0n"
    );
  };

  const handlePause = () => {
    synth.releaseAll();
  };

  const onSelectNewNote = (musicNotation: MusicNotation) => {
    if (
      isPlayingTanpura &&
      musicNotation.id !== selectedNotationInfo.id &&
      musicNotation.id !== "x"
    ) {
      handlePause();
      setTimeout(() => {
        handlePlay(musicNotation);
      }, 0);
    }
  };

  return { handlePlayPause, onSelectNewNote };
};

export default useNotation;
