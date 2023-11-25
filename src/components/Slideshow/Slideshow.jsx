import { useState } from "react";
import arrowLeft from "../../assets/images/arrow_left.svg";
import arrowRight from "../../assets/images/arrow_right.svg";

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

  // Condition pour afficher ou masquer les flèches et le nombre d'images
  const showDisplayControls = length > 1;

  return (
    <div id="slideshow-container">
      {showDisplayControls && (
        <img
          src={arrowLeft}
          alt="flèche gauche carrousel"
          id="arrow_left_svg"
          onClick={handlePrev}
        />
      )}
      <img
        src={slideshow[currentIndex]}
        alt="image dans le carrousel"
        id="slideshow-container_img"
      />
      {showDisplayControls && (
        <img
          src={arrowRight}
          alt="flèche droite carrousel"
          id="arrow_right_svg"
          onClick={handleNext}
        />
      )}
      {showDisplayControls && (
        <div id="slideshow-position">
          {currentPosition}/{length}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
