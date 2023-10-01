import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import data from "../data/data.json";
import { useNavigate, useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
function Accommodations() {

  const [dataAccommodationPictures, setDataAccommodationPictures] = useState([]);
  const [dataCurrentAccommodation, setDataCurrentAccommodation] = useState([]);
  const id = useParams('id').id;
  const navigate = useNavigate();

  useEffect(() => {
    const currentAccommodation = data.find(item => item.id === id);
    if (currentAccommodation) {
      const accommodationPictures = currentAccommodation.pictures || [];

      setDataAccommodationPictures(accommodationPictures);
      setDataCurrentAccommodation(currentAccommodation)
    } else {
      navigate("*")
    }
  }, [id]);

  return (
    <>
      <div id="accommodations-container">
        <Slideshow slideshow={dataAccommodationPictures} />
        <div id="accommodations-container__infos">
          <div id="accommodations-container-infos__leftPart">
            <h1 id="accommodations-container__title">{dataCurrentAccommodation.title}</h1>
            <h2 id="accommodations-container__location">{dataCurrentAccommodation.location}</h2>
          </div>
          <div id="accommodations-container-infos__rightPart">
            <div>
              <h3 id="accommodations-container__name">{dataCurrentAccommodation.host?.name}</h3>
              <img src={dataCurrentAccommodation.host?.picture} alt="" />
            </div>
          </div>
        </div>

        <div id="accommodations-container__collapse">
          <Collapse title={"Description"} />
          <Collapse title={"Equipements"} />
        </div>
      </div>
    </>
  )
}

export default Accommodations