import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = () => {

    const [FormData, setFormData] = useState({
        "name" : null,
        "age" : null,
        "summary" : null,
        "link": null,
    })

    const navigate = useNavigate() 

    const handleSubmit = event => {
        event.preventDefault()
        PostFormData()
    }

    const PostFormData = () => {
        fetch(process.env.REACT_APP_API_URL + "/person", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(FormData)
        })
        .then(() => {
            alert('Cancelado cadastrado com sucesso!')
            return navigate("/")
        })
        .catch(e => {
            alert('Requisição malsucedida ' + e.message) 
        })
    }

     return (
        <form className="mb-5 col-md" onSubmit={handleSubmit}>
            <label className="form-label">Nome</label>
            <input type="text" required className="form-control mb-3" value={FormData.name} placeholder="Nome" 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        name: e.target.value
                    })
                }}
            />
            <label className="form-label">Idade</label>
            <input type="number" required className="form-control mb-3" value={FormData.age} placeholder="69" 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        age: e.target.value
                    })
                }}
            />
            <label className="form-label">Motivo do cancelamento</label>
            <input type="text" required className="form-control mb-3" value={FormData.summary} placeholder="Crimes contra a humanidade" 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        summary: e.target.value
                    })
                }}
            />
            <label className="form-label">Link</label>
            <input type="url" required className="form-control mb-3" value={FormData.link} placeholder="https://google.com" 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        link: e.target.value
                    })
                }}
            />
            <input type="submit" className="btn btn-primary" value="Cadastrar" />
        </form>
    )
}
export default Form
