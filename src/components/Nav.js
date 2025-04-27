import "../App.css"
import { Link } from "react-router-dom"
import logo from "../images/logo.svg"

const Nav = () => {
    return(
    <div className="Nav">
    <Link to ="/"><img className="Nav-logo" src={logo} alt="Little Lemon Logo"/></Link>
    <ul className="Nav-ul">
        <li><Link to ="/">Home</Link></li>
        <li><a href ="#about">About</a></li>
        <li><Link to ="/menu">Menu</Link></li>
        <li><Link to ="/booking">Reservations</Link></li>
        <li><Link to ="/order-online">Order Online</Link></li>
        <li><Link to ="/login">Login</Link></li>
    </ul>
    </div>
    )
}

export default Nav;
