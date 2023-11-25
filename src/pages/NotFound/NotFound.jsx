import notFoundImg from "../../assets/images/404.png";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <div id="notFound__container">
        <img src={notFoundImg} alt="Page not found logo" />
        <h1>Oups! La page que vous demandez n’existe pas.</h1>
        <p>
          <Link to={"/"}>Retourner sur la page d’accueil</Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
