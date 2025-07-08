import "./css/Card.css"

function Card({description}){
    return<>
    <div className="Card-Set">
        <div className="Card-item">
            <p className="Description">{description}</p>
        </div>
    </div>
    </>
}

export default Card