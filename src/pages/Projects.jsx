import image1 from "../assets/image1.gif";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import './css/Projects.css';

function Projects() {
    return <div className="Projects">
        <div className="Projects-desc">
            <div className="Images">
                <img src={image1} width={400} height={225}/>
                <img src={image2} width={400} height={225}/>
                <img src={image3} width={400} height={225}/>
                <img src={image4} width={400} height={225}/>

            </div>
            <div className="Projects-Text-Section">
                <h1>Snowboarders: Kiri Adventures</h1>
                <h2>Hello the Text is here!</h2>
                <h3>Play "Snowboarders: Kiri Adventures" a snowboarding game in which you pick as many coins as you can while doing backflips in the snowy hills. Avoid the rocks! Super cool graphics and chill music. </h3>
            </div>
        </div>
    </div>
}

export default Projects