// importing important files
import './css/blog.css';
//importing components 
import BlogItem from './BlogComponents.jsx';
//importing assets videos/images
import image1 from "../assets/blog-images/fish.mp4";
import image2 from "../assets/blog-images/fish.mp4";
//main componenent
function Blogs() {
    return <div>
        <div className="blog">
            <BlogItem Image = {image2} 
                Title = "A Guide to Procedural Animations" 
                    headline = "Posted On:15-09-2025" 
                        desc = "So Recently I've jumped upon trying to make realistic animatable looking creatures using procedural animations technique.." />
            <BlogItem Image = {image1} 
                Title = "Coding my own Minimalism Code Editor?" 
                    headline = "Posted On:15-09-2025" 
                        desc = "I am thinking to make a text/code editor. Lets see how it goes.." />
        </div>
    </div>
}

export default Blogs