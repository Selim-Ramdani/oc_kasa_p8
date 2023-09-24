
import Home from "../pages/Home"
import About from "../pages/About"
import { Link, Navigate } from "react-router-dom"
import logo from "../assets/logo_kasa.png";
function Header() {

  return (
    <header id="header">
      <div id="header__logo">
        <img src={logo} alt="logo_kasa" id="logo" />
      </div>
      <div id="header__links">
      <Link to="/">
        <button id="header__links_homepage">Accueil</button>
      </Link>
      <Link to="/a-propos">
        <button id="header__links_aboutpage">A propos</button>
      </Link>
      </div>
    </header>
  )
}

export default Header