import { useState } from "react"

const Form1 = () => {

    const [FormData, setFormData] = useState({
        "name": "",
        "age": "",
        "summary": "",
        "link": "",
        "img": "",
        })

    const handleSubmit = event => {
        event.preventDefault()
        Register()
    }
    

    const Register = () => {
        console.log(FormData)
        fetch(process.env.API_URL + "/api/person/new", {
            crossDomain:true,
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            mode: 'cors',
            body: JSON.stringify(FormData)
        }).catch(e => {
            alert('Cant complete request' + e.message); 
        })
    }


     return (
        <form className="mb-5 col-md" onSubmit={handleSubmit}>
            <label className="form-label">Nome</label>
            <input type="text" className="form-control mb-3" placeholder="nome" 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        name: e.target.value
                    })
                }}
            />
            <label className="form-label">Idade</label>
            <input type="text" className="form-control mb-3" placeholder="exemplo@email.com" 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        age: e.target.value
                    })
                }}
            />
            <label className="form-label">Motivo do cancelamento</label>
            <input type="text" className="form-control mb-3" placeholder="..." 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        summary: e.target.value
                    })
                }}
            />
            <label className="form-label">Link</label>
            <input type="text" className="form-control mb-3" placeholder="..." 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        link: e.target.value
                    })
                }}
            />
            <label className="form-label">Image</label>
            <input type="text" className="form-control mb-3" placeholder="..." 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        img: e.target.value
                    })
                }}
            />
            <input type="submit" className="btn btn-primary" value="Cadastrar" />
        </form>
    )
}
export default Form1