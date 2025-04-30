import "../App.css"
import { Link } from "react-router-dom"
import footerlogo from "../images/footer-logo.svg"

const Footer = () => {
    return (
    <div className="Footer bg-[#a7a01c] grid items-center text-center grid-cols-4 grid-rows-[repeat(2,0.5fr)] justify-center pt-10">
    <Link to ="/"><img className="Footer-logo h-64 justify-self-center" src={footerlogo} alt="Little Lemon Logo"/></Link>
    <ul className="Footer-DNavigation text-lg flex flex-col">
        <label className="text-4xl pb-10 text-white">Doormat Navigation</label>
        <div className="Footer-Links grid grid-cols-[repeat(2,0.5fr)] gap-10 text-white">
        <li><Link to = "/">→ Home</Link></li>
        <li><Link to ="/#about">→ About</Link></li>
        <li><Link to ="/menu">→ Menu</Link></li>
        <li><Link to ="/booking">→ Reservations</Link></li>
        <li><Link to ="/order-online">→ Order Online</Link></li>
        <li><Link to ="/login">→ Login</Link></li>
        </div>
    </ul>
    <ul className="Footer-Social text-lg flex flex-col gap-9 text-white">
        <label className="text-4xl">Social Media Links</label>
        <li><a href="https://www.facebook.com" className="text-xl">↗ Facebook</a></li>
        <li><a href="https://www.instagram.com" className="text-xl">↗ Instagram</a></li>
        <li><a href="https://www.youtube.com" className="text-xl">↗ Youtube</a></li>
    </ul>
    <ul className="Footer-Contact text-lg flex flex-col gap-3 text-white">
        <label className="text-4xl">Contact</label>
        <li>Address: Little Lemon Restaurant</li>
        <li>123 Main Street</li>
        <li>Anytown, USA 12345</li>
        <li>Phone Number: (555) 123-4567</li>
        <li>Email: info@littlelemon.com</li>
    </ul>
        <span className="rights col-span-full text-2xl pt-16 text-white">&copy; 2025 Abdelfattah. All rights reserved.™</span>
    </div>
    )
}

export default Footer