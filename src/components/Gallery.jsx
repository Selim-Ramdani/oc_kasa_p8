import { useState } from "react";
import jsonData from "../data/data.json";
import Cards from "./Cards";

function Gallery() {
  const [accommodations] = useState(jsonData);
  const [visibleAccommodations, setVisibleAccommodations] = useState(6);

  const loadMoreAccommodations = () => {
    setVisibleAccommodations(visibleAccommodations + 6);
  };

  return (
    <>
      <main className="gallery-container">
        <div className="gallery">
          {accommodations.slice(0, visibleAccommodations).map((item) => (
            <Cards
              id={item.id}
              key={item.id}
              title={item.title}
              cover={item.cover}
            />
          ))}
        </div>
        {visibleAccommodations < accommodations.length && (
          <button id="display-more" onClick={loadMoreAccommodations}>
            Afficher plus
          </button>
        )}
      </main>
    </>
  );
}

export default Gallery;
