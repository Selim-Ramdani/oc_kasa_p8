import { Link } from "react-router-dom";
function Cards({ title, cover, id }) {
  return (
    <Link to={`logements/${id}`}>
      <div id="cards-container">
        <img src={cover} alt="cover" id="card-container__img" />
        <h2 id="card-container__title">{title}</h2>
      </div>
    </Link>
  );
}

export default Cards;
