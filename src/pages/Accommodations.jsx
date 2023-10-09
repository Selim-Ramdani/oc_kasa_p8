import { useEffect, useState } from "react";
import data from "../data/data.json";
import { useNavigate, useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import AccommodationInfo from "../components/AccommodationInfo";

function Accommodations() {
  const [dataAccommodationPictures, setDataAccommodationPictures] = useState(
    []
  );
  const [dataCurrentAccommodation, setDataCurrentAccommodation] = useState({});
  const id = useParams("id").id;
  const navigate = useNavigate();

  useEffect(() => {
    const currentAccommodation = data.find((item) => item.id === id);
    if (currentAccommodation) {
      const accommodationPictures = currentAccommodation.pictures || [];

      setDataAccommodationPictures(accommodationPictures);
      setDataCurrentAccommodation(currentAccommodation);
    } else {
      navigate("*");
    }
  }, [id, navigate]);

  return (
    <main className="accommodations-container">
      <Slideshow slideshow={dataAccommodationPictures} />
      <AccommodationInfo
        title={dataCurrentAccommodation.title || ""}
        location={dataCurrentAccommodation.location || ""}
        tags={dataCurrentAccommodation.tags || []}
        host={dataCurrentAccommodation.host || {}}
        dataCurrentAccommodation={dataCurrentAccommodation}
      />
    </main>
  );
}

export default Accommodations;
