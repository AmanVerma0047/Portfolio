import "./css/Card.css"

function Card({description}){
    return<>
    <div className="Card-Set">
        <div className="Card-item">
            {/* <img src={image} height={280} width={280}/> */}
            <p className="Description">{description}</p>
        </div>
    </div>
    </>
}

export default Card