import { useState } from "react"

const Card = props => {

    const [Status, setStatus] = useState("")
    const [ErrorMessage, setErrorMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault()  
    }

    const DeletePerson = () => {
        fetch(process.env.REACT_APP_API_URL + "/person", { 
            method: 'DELETE' 
        })
        .then(async rest => {
            const data = await rest.json();
            if (!rest.ok) {
                const error = (data && data.message) || rest.status;
                return Promise.reject(error);
            }

            setStatus('Delete successful');
        })
        .catch(error => {
            setErrorMessage(error);
            console.error('There was an error!', error);
        });
    }

    return (
            <div className="card bg-dark">
            <img src={props.img} className="card-img-top" alt="profile pic" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.summary}</p>
                <a href="#" className="btn btn-primary">Mais informações</a>
            </div>
            <div className="card-footer">
                <form onSubmit={handleSubmit}>
                    <input className="btn btn-danger" value="Apagar"/>
                </form>
            </div>
        </div>
    )
}

export default Card