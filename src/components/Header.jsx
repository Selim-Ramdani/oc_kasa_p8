
import Home from "../pages/Home"
import About from "../pages/About"
import { Link, Navigate } from "react-router-dom"
import logo from "../assets/images/logo_kasa.png";
function Header() {

  return (
    <header id="header">
      <div id="header__logo">
        <Link to={"/"}><img src={logo} alt="logo_kasa" id="logo" /></Link>
      </div>
      <div id="header-links">
        <Link to="/">
          <button id="header-links__homepage">Accueil</button>
        </Link>
        <Link to="/a-propos">
          <button id="header-links__aboutpage">A propos</button>
        </Link>
      </div>
    </header>
  )
}

export default Header