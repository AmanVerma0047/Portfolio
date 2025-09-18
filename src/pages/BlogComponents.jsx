import './css/blog.css';


function BlogItem({ Image, Title, headline, desc }) {
    return <div className="BlogItem">
        <div className="Heads">
            <h2>{Title}</h2>
            <h3>{headline}</h3>
        </div>
        <div className="Description">
            <div className="Images">
                <video autoPlay loop muted playsInline width="320px" className="ImageItem">
                    <source src={Image} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="DescText">
            <h4>{desc}</h4>
            </div>
        </div>
    </div>
}

export default BlogItem