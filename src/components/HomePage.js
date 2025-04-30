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
               <section className="Sec1 bg-[#495E57] flex justify-center py-7">
                <div className="Sec1_1 pt-5 pr-96 text-white">
                <h1 className="text-[#f7ef53] text-5xl pb-4">Little Lemon</h1>
                <h2 className="text-[#f7ef53] text-4xl pb-4">Chicago</h2>
                <p className="text-2xl max-w-[500px]">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to = "/booking"><button className="bg-[#f7ef53] text-[#4a11ce] rounded-[10px] mt-6 p-2.5 text-2xl">Reserve A Table</button></Link>
                </div>
                <div className="Sec1_2">
                    <img src={photo1} alt="Photo1" className="rounded-3xl h-96"/>
                </div>
               </section>
    
               <section className="Sec2 flex bg-blue-900 justify-between pt-20 pb-10 px-96 items-center">
                <section className="Sec2_1 text-white text-5xl">
                <h1>This weeks specials!</h1>
                </section>
                <section className="Sec2_2">
                <button className="bg-[#f7ef53] text-[#4a11ce] text-2xl p-5 rounded-3xl">Online Menu</button>
                </section>
               </section>
    
               <section className="CardSec">
                <div className="Card bg-blue-900 flex justify-around p-20">
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
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
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
