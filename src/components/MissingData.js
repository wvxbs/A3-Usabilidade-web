const MissingData = props => {
    return (
        <div className="text-center">
            <h1 className="title display-2 fw-bold">
                {props.title}
            </h1>
            <p>{":("}</p>
        </div>
    )
}

export default MissingData