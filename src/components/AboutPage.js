import photo2 from "../images/photo2.png"

const About = () => {
    return (
        <section className="about bg-[#b3bdd3] p-20 grid grid-cols-[0.4fr_0.4fr] justify-between items-center text-center gap-4 scroll-smooth" id="about">
        <div className="Text">
            <h1 className="text-[#f7ef53] text-5xl pb-2">Little Lemon</h1>
            <h2 className="text-[#f7ef53] text-4xl pb-4">Chicago</h2>
            <p className="text-black text-2xl">Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
            </div>
            <img src={photo2} alt="Photo2" className="Aboutpic"/>
            </section>
    )
}

export default About