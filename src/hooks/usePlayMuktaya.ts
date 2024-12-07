import { useState } from "react";
import * as Tone from "tone";
import EkatalaMuktaya from "../assets/audio/chende-beats/ekatala-muktaya.m4a";

const player = new Tone.Player({
  url: EkatalaMuktaya,
  autostart: false,
}).toDestination();

const usePlayMuktaya = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuktayaCompleted, setIsMuktayaCompleted] = useState(false);

  const handleMuktaya = (play: boolean) => {
    if (play) {
      playMuktaya();
    } else if (isPlaying) {
      pauseMuktaya();
    }
  };

  const playMuktaya = () => {
    player.start();
    setIsPlaying(true);
    player.onstop = () => {
      pauseMuktaya();
    };
  };

  const pauseMuktaya = () => {
    player.stop();
    setIsPlaying(false);
    setIsMuktayaCompleted(true);
    setTimeout(() => {
      setIsMuktayaCompleted(false);
    }, 1000);
  };

  return { handleMuktaya, isMuktayaCompleted };
};

export default usePlayMuktaya;
