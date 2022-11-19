import { useState } from "react"

const Form = () => {

    const [FormData, setFormData] = useState({
        name : "",
        age : "",
        summary : "",
        link: "",
        img : ""
    })
    

    const handleSubmit = event => {
        event.preventDefault()

        console.log(process.env.REACT_APP_API_URL)

        console.log(FormData)
        fetch(process.env.REACT_APP_API_URL, {
            crossDomain:true,
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(FormData)
        }).catch(e => {
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
