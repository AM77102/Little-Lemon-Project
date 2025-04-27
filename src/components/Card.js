import "../App.css"

const Card = (prop) => {
    return (
     <div className="card">
        <img src={prop.image} alt={prop.name} className="card_image"/>
        <div className="card_content">
            <h2>{prop.name}</h2>
            <h2>{prop.price}</h2>
            </div>
            <p>{prop.description}</p>
            <p><span>Order a delivery 🛵</span></p>
     </div>
)
}

export default Card