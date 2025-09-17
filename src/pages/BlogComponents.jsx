import './css/blog.css';

function BlogItem({ Image, Title, headline, desc }) {
    return <div className="BlogItem">
        <div className="Images">
            <video autoPlay loop muted playsInline width="320px" className="ImageItem">
                <source src={Image} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="Description">
            <h1>{Title}</h1>
            <h2>{headline}</h2>
            <h3>{desc}</h3>
        </div>
    </div>
}

export default BlogItem