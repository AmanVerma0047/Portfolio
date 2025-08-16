import "./css/Card.css"

function Card({image,description,link}){
    return<>
    <div className="Card-Set">
        <div className="Card-item">
            {image && <img src={image} height={225} width={400}/>}
            <p className="Description">{description}</p>
            {link && <a href={link} target="_blank">View Site</a>}
        </div>
    </div>
    </>
}

export default Card