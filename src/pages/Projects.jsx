import image2 from "../assets/blog-images/fish.mp4";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import './css/Projects.css';
import Card from './Card.jsx';

function Projects() {
    return <> <div className="Projects">
        {/* projects-desc is Blog. Imageitem is Imageitem. Projects-Text-Section */}
        <div className="ProjectCards">
        <Card image={image2} description="Procedural Creatures Creator!" link="https://kirisoft.dev" />
        <Card image={image2} description="Games!" link="https://kirisoft.dev" />
        </div>
    </div>
    </>
}

export default Projects