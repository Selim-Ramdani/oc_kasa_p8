import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo_kasa.png";
function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="logo_kasa" id="header-logo" />
      </Link>
      <div className="header-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "header-links__homepage active"
              : "header-links__homepage"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) =>
            isActive
              ? "header-links__homepage active"
              : "header-links__homepage"
          }
        >
          A propos
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
