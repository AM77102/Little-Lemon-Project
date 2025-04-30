import { Link } from "react-router-dom"

const Card = (prop) => {
    return (
     <div className="card flex w-[300px] h-[420px] flex-col bg-[#aaa9a9] rounded-[40px] text-center transition-transform duration-[1500ms] ease-in-out hover:scale-125 hover:shadow-2xl">
        <img src={prop.image} alt={prop.name} className="card_image rounded-tl-[40px] rounded-tr-[40px] h-[200px] w-auto"/>
        <div className="card_content flex justify-between text-[#804a1d] text-2xl pb-2 pl-2 pr-2">
            <h2 className="font-sans">{prop.name}</h2>
            <h2 className="font-sans">{prop.price}</h2>
            </div>
            <p className="font-sans text-[#804a1d] text-md mb-auto">{prop.description}</p>
            <p><span><Link to="/order-online" className="text-[#804a1d] text-2xl">Order a delivery 🛵</Link></span></p>
     </div>
)
}

export default Card