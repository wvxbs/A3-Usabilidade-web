import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Card = props => {

    const navigate = useNavigate() 
    
    const handleclick = event => {
        event.preventDefault()
        DeletePerson()
    }

    const DeletePerson = () => {
        const id = props.data.id

        fetch(process.env.REACT_APP_API_URL + "/person?id=" + id, {
            method: 'DELETE',
            mode : 'cors'
        })
        .then(res => {
            console.log(res)

            if(!res.ok) throw new Error('Algo deu errado')
              
            navigate("/")
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className="card bg-dark" key={props.data.id}>
        <div className="card-header">
            <h5 className="card-title text-wrap"><b>{props.data.name}</b> {props.data.age}</h5>
        </div>
        <div className="card-body">
            <p className="card-text text-wrap">{props.data.summary}</p>
        </div>
        <div className="card-footer">
            <div className="btn-group" role="group">
                <button className="btn btn-danger" onClick={handleclick}>
                    <i className="fa-solid fa-trash"></i>
                </button>
                <a href={props.data.link} className="btn btn-success">
                    <i className="fa-solid fa-link"></i>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Card