import { useState } from "react";
import jsonData from "../../data/data.json";
import Cards from "../Cards/Cards";

function Gallery() {
  const [accommodations] = useState(jsonData);

  return (
    <>
      <div className="gallery-container">
        <div className="gallery">
          {accommodations.map((item) => (
            <Cards
              id={item.id}
              key={item.id}
              title={item.title}
              cover={item.cover}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
