import "./css/Card.css"

function Card({image,description}){
    return<>
    <div className="Card-Set">
        <div className="Card-item">
            {/* <img class="Card-img" height={225} width={225} src={image} alt="Card.."></img> */}
            {/* <br/> */}
            <p className="Description">{description}</p>
        </div>
    </div>
    </>
}

export default Card