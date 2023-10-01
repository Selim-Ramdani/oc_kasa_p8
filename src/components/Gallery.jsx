import { useState } from "react";
import jsonData from "../data/data.json";
import Cards from "./Cards";


function Gallery() {
  const [accommodations, setAccommodations] = useState(jsonData);
  const slicedData = accommodations.slice(0, 6);

  return (
    <div id="gallery-container">
      {
        slicedData.map(item => (
          <Cards id={item.id} key={item.id} title={item.title} cover={item.cover} />
        ))
      }
    </div>
  )
}

export default Gallery;