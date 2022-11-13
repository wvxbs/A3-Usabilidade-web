const Card = props => {
    return (
            <div className="card bg-dark">
            <img src={props.img} className="card-img-top" alt="profile pic" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.summary}</p>
                <a href="#" className="btn btn-primary">Mais informações</a>
            </div>
            <div className="card-footer">
                <button className="btn btn-danger">Apagar</button>
            </div>
        </div>
    )
}

export default Card