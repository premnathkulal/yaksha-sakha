import "./ShruthiSelector.scss";
import { MusicNotation } from "../../constants/UiData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { MusicNotation as MusicNotationInfo } from "../../hooks/useNotation";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app-store";

interface ShruthiSelectorProps {
  selectFrequency: (musicNotation: MusicNotationInfo) => void;
}

const ShruthiSelector = ({ selectFrequency }: ShruthiSelectorProps) => {
  const selectedNotationInfo = useSelector<RootState>(
    (state) => state.selections.selectedPitchInfo
  ) as MusicNotationInfo;

  const [activeItem, setActiveItem] = useState<MusicNotationInfo>(
    MusicNotation[0]
  );
  const [prevItem, setPrevItem] = useState(MusicNotation[0]);
  const [nextItem, setNextItem] = useState(MusicNotation[0]);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [reachedStart, setReachedStart] = useState(false);
  const [clickedLeft, setClickedLeft] = useState(false);
  const [fadeAnimation, setFadeAnimation] = useState(false);

  const handleLeftPress = () => {
    setFadeAnimation(true);

    let currentIndex = MusicNotation.findIndex(
      (item) => item.id === activeItem.id
    );
    setReachedStart(false);
    setClickedLeft(true);

    const prevIndex = currentIndex;
    if (prevIndex + 2 > MusicNotation.length - 1) {
      const prevItem = MusicNotation[prevIndex];
      setPrevItem(prevItem);

      const currentItem = MusicNotation[prevIndex + 1];
      setActiveItem(currentItem);

      setReachedEnd(true);
      return;
    }

    const prevItem = MusicNotation[prevIndex];
    setPrevItem(prevItem);

    const currentItem = MusicNotation[prevIndex + 1];
    setActiveItem(currentItem);

    const NextItem = MusicNotation[prevIndex + 2];
    setNextItem(NextItem);
  };

  const handleRightPress = () => {
    setFadeAnimation(true);

    const currentIndex = MusicNotation.findIndex(
      (item) => item.id === activeItem.id
    );
    setReachedEnd(false);
    setClickedLeft(false);

    const nextIndex = currentIndex;
    if (nextIndex - 2 < 1) {
      const nextItem = MusicNotation[nextIndex];
      setNextItem(nextItem);

      const currentItem = MusicNotation[nextIndex - 1];
      setActiveItem(currentItem);

      setReachedStart(true);
      return;
    }
    const nextItem = MusicNotation[nextIndex];
    setNextItem(nextItem);

    const currentItem = MusicNotation[nextIndex - 1];
    setActiveItem(currentItem);

    const prevItem = MusicNotation[nextIndex - 2];
    setPrevItem(prevItem);
  };

  const animationName = () => {
    if (!clickedLeft) return "fade-left";
    else return "fade-right";
  };

  useEffect(() => {
    if (activeItem.id !== "x") selectFrequency(activeItem);
  }, [activeItem]);

  useEffect(() => {
    const currentIndex = MusicNotation.findIndex(
      (item) => item.id === selectedNotationInfo.id
    );

    setActiveItem(MusicNotation[currentIndex]);

    currentIndex + 1 < MusicNotation.length - 1
      ? setNextItem(MusicNotation[currentIndex + 1])
      : setReachedEnd(true);

    currentIndex - 1 >= 1
      ? setPrevItem(MusicNotation[currentIndex - 1])
      : setReachedStart(true);
  }, []);

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
