import { Outlet, Link } from 'react-router-dom'
import "../style/Header.css"
import logo from "../logo.svg"

function Header() {
  return (
  <header>
    <div>
      <Link to="/">
        <img src={logo} alt="logo à définir"/>
      </Link>
    </div>
    <nav>
      <Link to="/">
        <span>Saisie Client</span>
      </Link>
      <Link to="/liste">
        <span>Liste</span>
      </Link>
    </nav>
      <Outlet />
  </header>
  )
}

export default Header