import { Link } from "react-router-dom"
import TestimonialSwiper from "./Testimonials"
import AboutPage from "./AboutPage"
import photo1 from "../images/photo1.png"
import Card from "./Card"
import card1 from "../images/card1.jpg"
import card2 from "../images/card2.jpg"
import card3 from "../images/card3.jpeg"

const HomePage = () => {

    return (
            <div className="Container">
               <section className="Sec1">
                <div className="Sec1_1">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to = "/booking"><button>Reserve A Table</button></Link>
                </div>
                <div className="Sec1_2">
                    <img src={photo1} alt="Photo1"/>
                </div>
               </section>
    
               <section className="Sec2">
                <section className="Sec2_1">
                <h1>This weeks specials!</h1>
                </section>
                <section className="Sec2_2">
                <Link to = "/menu"><button>Online Menu</button></Link>
                </section>
               </section>
    
               <section className="CardSec">
                <div className="Card">
                    <Card 
                    image={card1}
                    name="Greek Salad"
                    price="$12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
                    <Card 
                    image={card2}
                    name="Bruchetta"
                    price="$5.99"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and deleciouse olive oil."
                    />
                    <Card 
                    image={card3}
                    name="Lemon Dessert"
                    price="$5.00"
                    description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    />
                </div>
               </section>

               
               <TestimonialSwiper />
               <AboutPage />
            </div>
        )
}

export default HomePage
