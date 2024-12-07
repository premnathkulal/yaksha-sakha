import "./ShruthiSelector.scss";
import { MusicNotation } from "../../constants/UiData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface ShruthiSelectorProps {
  selectFrequency: (pitch: number) => void;
}

const ShruthiSelector = ({ selectFrequency }: ShruthiSelectorProps) => {
  const [musicNotation] = useState(MusicNotation);
  const [activeItem, setActiveItem] = useState(MusicNotation[4]);
  const [prevItem, setPrevItem] = useState(MusicNotation[3]);
  const [nextItem, setNextItem] = useState(MusicNotation[5]);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [reachedStart, setReachedStart] = useState(false);
  const [clickedLeft, setClickedLeft] = useState(false);
  const [fadeAnimation, setFadeAnimation] = useState(false);

  const handleLeftPress = () => {
    setFadeAnimation(true);

    let currentIndex = musicNotation.findIndex(
      (item) => item.id === activeItem.id
    );
    setReachedStart(false);
    setClickedLeft(true);

    const prevIndex = currentIndex;
    if (prevIndex + 2 > musicNotation.length - 1) {
      const prevItem = musicNotation[prevIndex];
      setPrevItem(prevItem);

      const currentItem = musicNotation[prevIndex + 1];
      setActiveItem(currentItem);

      setReachedEnd(true);
      return;
    }

    const prevItem = musicNotation[prevIndex];
    setPrevItem(prevItem);

    const currentItem = musicNotation[prevIndex + 1];
    setActiveItem(currentItem);

    const NextItem = musicNotation[prevIndex + 2];
    setNextItem(NextItem);
  };

  const handleRightPress = () => {
    setFadeAnimation(true);

    const currentIndex = musicNotation.findIndex(
      (item) => item.id === activeItem.id
    );
    setReachedEnd(false);
    setClickedLeft(false);

    const nextIndex = currentIndex;
    if (nextIndex - 2 < 0) {
      const nextItem = musicNotation[nextIndex];
      setNextItem(nextItem);

      const currentItem = musicNotation[nextIndex - 1];
      setActiveItem(currentItem);

      setReachedStart(true);
      return;
    }
    const nextItem = musicNotation[nextIndex];
    setNextItem(nextItem);

    const currentItem = musicNotation[nextIndex - 1];
    setActiveItem(currentItem);

    const prevItem = musicNotation[nextIndex - 2];
    setPrevItem(prevItem);
  };

  const animationName = () => {
    if (!clickedLeft) return "fade-left";
    else return "fade-right";
  };

  useEffect(() => {
    selectFrequency(activeItem.frequency);
  }, [activeItem]);

  return (
    <div className="shruthi-selector">
      <div
        className={`shruthi-control-btn prev-btn ${
          reachedStart ? "disable-btn" : ""
        }`}
        onClick={handleRightPress}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="btn-control-icon" />
      </div>
      <div className="shruthi-options">
        <div
          className={`shruthi-option prev ${reachedStart ? "hide-option" : ""}`}
        >
          {prevItem.kannadaNotation}
        </div>
        <div
          className={`shruthi-option current ${
            fadeAnimation ? animationName() : ""
          }`}
          onAnimationEnd={() => setFadeAnimation(false)}
        >
          {activeItem.kannadaNotation}
          <div className="wester-notation"> {activeItem.western}</div>
        </div>
        <div
          className={`shruthi-option next ${reachedEnd ? "hide-option" : ""}`}
        >
          {nextItem.kannadaNotation}
        </div>
      </div>
      <div
        className={`shruthi-control-btn next-btn ${
          reachedEnd ? "disable-btn" : ""
        }`}
        onClick={handleLeftPress}
      >
        <FontAwesomeIcon icon={faChevronRight} className="btn-control-icon" />
      </div>
    </div>
  );
};

export default ShruthiSelector;
