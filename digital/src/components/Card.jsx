import Info from "./Info"
import About from "./About"
import Socials from "./Socials"
import Footer from "./Footer"

function Card(){
    return(
        <div className="card">
            <Info />
            <About />
            <Socials />
            <Footer />
        </div>
    )
}

export default Card