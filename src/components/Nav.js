import { Link } from "react-router-dom"
import logo from "../images/logo.svg"

const Nav = () => {
    return(
    <div className="Nav bg-[#a7a01c] flex items-center p-4">
    <Link to ="/"><img className="Nav-logo h-20" src={logo} alt="Little Lemon Logo"/></Link>
    <ul className="Nav-ul list-none flex gap-6 ml-auto">
        <li><Link to ="/" className="hover:text-[#ac0909] text-2xl">Home</Link></li>
        <li><a href ="#about" className="hover:text-[#ac0909] text-2xl">About</a></li>
        <li><Link to ="/menu" className="hover:text-[#ac0909] text-2xl">Menu</Link></li>
        <li><Link to ="/booking" className="hover:text-[#ac0909] text-2xl">Reservations</Link></li>
        <li><Link to ="/order-online" className="hover:text-[#ac0909] text-2xl">Order Online</Link></li>
        <li><Link to ="/login" className="hover:text-[#ac0909] text-2xl">Login</Link></li>
    </ul>
    </div>
    )
}

export default Nav;
