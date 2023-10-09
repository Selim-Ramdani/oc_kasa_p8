import { useState } from "react";
import arrowLeft from "../assets/images/arrow_left.svg";
import arrowRight from "../assets/images/arrow_right.svg";
function Slideshow({ slideshow }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = slideshow.length;

  const currentPosition = currentIndex + 1;

  const handleNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  return (
    <div id="slideshow-container">
      <img
        src={arrowLeft}
        alt="flèche gauche carroussel"
        id="arrow_left_svg"
        onClick={handlePrev}
      />
      <img
        src={slideshow[currentIndex]}
        alt="image dans le carroussel"
        id="slideshow-container_img"
      />
      <img
        src={arrowRight}
        alt="flèche droite carroussel"
        id="arrow_right_svg"
        onClick={handleNext}
      />
      <div id="slideshow-position">
        {currentPosition}/{length}
      </div>
    </div>
  );
}

export default Slideshow;
