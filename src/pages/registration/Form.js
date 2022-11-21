import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = () => {

    const [FormData, setFormData] = useState({
        name : "",
        age : "",
        summary : "",
        link: "",
        img : ""
    })

    const [Loading, setLoding] = useState(false)

    const navigate = useNavigate(); 

    const handleSubmit = event => {
        event.preventDefault()
        console.log(FormData)
        PostFormData()
        RedirectToHome(event)
    }

    const RedirectToHome = event => {
        event.preventDefault()
        
        return navigate("/")
    }

    const PostFormData = () => {
        fetch(process.env.REACT_APP_API_URL, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(FormData)
        })
        .then(() => {
            alert('Cancelado cadastrado com sucesso!')
        })
        .catch(e => {
            alert('Cant complete request' + e.message); 
        })
    }

     return (
        <form className="mb-5 col-md" onSubmit={handleSubmit}>
            <label className="form-label">Nome</label>
            <input type="text" required className="form-control mb-3" value={FormData.name} placeholder="nome" 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        name: e.target.value
                    })
                }}
            />
            <label className="form-label">Idade</label>
            <input type="text" required className="form-control mb-3" value={FormData.age} placeholder="exemplo@email.com" 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        age: e.target.value
                    })
                }}
            />
            <label className="form-label">Motivo do cancelamento</label>
            <input type="text" required className="form-control mb-3" value={FormData.summary} placeholder="..." 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        summary: e.target.value
                    })
                }}
            />
            <label className="form-label">Link</label>
            <input type="text" required className="form-control mb-3" value={FormData.link} placeholder="..." 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        link: e.target.value
                    })
                }}
            />
            <label className="form-label">Image</label>
            <input type="text" required className="form-control mb-3" value={FormData.img} placeholder="..." 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        img: e.target.value
                    })
                }}
            />
            <input type="Submit" className="btn btn-primary" value="Cadastrar" />
        </form>
    )
}
export default Form
