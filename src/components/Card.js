import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Card = props => {

    const navigate = useNavigate() 
    
    const handleclick = event => {
        event.preventDefault()
        DeletePerson()
    }

    const DeletePerson = () => {
        const id = props.id

        fetch(process.env.REACT_APP_API_URL + "/person/delete?id=" + id, {
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
            <div className="card bg-dark">
            <img src={props.img} className="card-img-top" alt="profile pic" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.summary}</p>
            </div>
            <div className="card-footer">
                <div class="btn-group" role="group">
                    <button className="btn btn-danger" onClick={handleclick}>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <a href={props.link} className="btn btn-success">
                        <i class="fa-solid fa-link"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card