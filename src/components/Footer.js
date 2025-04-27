import "../App.css"
import { Link } from "react-router-dom"
import footerlogo from "../images/footer-logo.svg"

const Footer = () => {
    return (
    <div className="Footer">
    <Link to ="/"><img className="Footer-logo" src={footerlogo} alt="Little Lemon Logo"/></Link>
    <ul className="Footer-DNavigation">
        <label>Doormat Navigation</label>
        <div className="Footer-Links">
        <li><Link to = "/">Home</Link></li>
        <li><Link to ="/#about">About</Link></li>
        <li><Link to ="/menu">Menu</Link></li>
        <li><Link to ="/booking">Reservations</Link></li>
        <li><Link to ="/order-online">Order Online</Link></li>
        <li><Link to ="/login">Login</Link></li>
        </div>
    </ul>
    <ul className="Footer-Social">
        <label>Social Media Links</label>
        <li><a href="https://www.facebook.com">Facebook</a></li>
        <li><a href="https://www.instagram.com">Instagram</a></li>
        <li><a href="https://www.youtube.com">Youtube</a></li>
    </ul>
    <ul className="Footer-Contact">
        <label>Contact</label>
        <li>Address: Little Lemon Restaurant<br/>123 Main Street<br/>Anytown, USA 12345</li>
        <li>Phone Number: (555) 123-4567</li>
        <li>Email: info@littlelemon.com</li>
    </ul>
        <h3 className="rights">&copy; 2025 Abdelfattah. All rights reserved.™</h3>
    </div>
    )
}

export default Footer