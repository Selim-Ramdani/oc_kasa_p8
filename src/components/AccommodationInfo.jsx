import Tags from "./Tags";
import Collapse from "./Collapse";
import Ratings from "./Ratings";

function AccommodationInfo({
  title,
  location,
  tags,
  host,
  dataCurrentAccommodation,
}) {
  return (
    <>
      <main className="accommodations-container__infos">
        <section className="accommodations-container-infos__leftPart">
          <h1 className="accommodations-container__title">{title}</h1>
          <h2 className="accommodations-container__location">{location}</h2>
          <Tags tags={tags} />
        </section>
        <section className="accommodations-container-infos__rightPart">
          <div className="host-infos">
            <h3 className="accommodations-container__name">{host?.name}</h3>
            <img
              src={host?.picture}
              className="profil"
              alt="image du propriétaire"
            />
          </div>
          <Ratings dataCurrentAccommodation={dataCurrentAccommodation} />
        </section>
      </main>
      <section className="accommodations-collapse">
        <div className="accommodations-collapse__item">
          <Collapse
            title={"Description"}
            content={dataCurrentAccommodation.description}
          />
        </div>
        <div className="accommodations-collapse__item">
          <Collapse
            title={"Equipements"}
            content={dataCurrentAccommodation.equipments}
          />
        </div>
      </section>
    </>
  );
}

export default AccommodationInfo;
