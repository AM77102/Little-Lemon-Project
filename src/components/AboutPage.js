import "../App.css"
import photo2 from "../images/photo2.png"

const About = () => {
    return (
        <section className="about" id="about">
        <div className="Text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
            </div>
            <div className="Pic">
                <img src={photo2} alt="Photo2"/>
            </div>
            </section>
    )
}

export default About
