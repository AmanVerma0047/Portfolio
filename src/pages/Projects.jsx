import image2 from "../assets/blog-images/fish.mp4";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import './css/Projects.css';

function Projects() {
    return <> <div className="Projects">
        {/* projects-desc is Blog. Imageitem is Imageitem. Projects-Text-Section */}
        <div className="Projects-desc">
            <div className="Images">
                <video autoPlay loop muted playsInline width="480" className="Imageitem">
                    <source src={image2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="Projects-Text-Section">
                <h1>A Guide to Procedural Animations</h1>
                <h2>Create very smooth creatures using creative programming.</h2>
                <h3>So Recently I've jumped upon trying to make realistic animatable looking creatures using procedural animations technique..<a href="proceduraAnimationblog">Read more</a></h3>
            </div>
        </div>
        <div className="Projects-desc">
            <div className="Images">
                <img className="Imageitem" src={image3} />
            </div>
            <div className="Projects-Text-Section">
                <h1>Creating a custom Text Editor</h1>
                <h2>Creating a text editor may seem cool but hard to code from scratch</h2>
                <h3>I thought it would be cool to create my own text editor to code!<a href="proceduraAnimationblog">Read more</a></h3>
            </div>
        </div>
        
    </div>
    </>
}

export default Projects