import { useState } from "react"

const Form1 = () => {

    const [FormData, setFormData] = useState({
        name: "",
        age: "",
        summary: "",
        link: ""
      })

    const handleSubmit = event => {
        event.preventDefault()
        Register()
    }
    

    const Register = () => {
        console.log(FormData)
        fetch("http://localhost:4040" + "/api/person/new", {
            method: 'POST',
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
                        example1: e.target.value
                    })
                }}
            />
            <label className="form-label">Idade</label>
            <input type="text" className="form-control mb-3" placeholder="exemplo@email.com" 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        example2: e.target.value
                    })
                }}
            />
            <label className="form-label">Motivo do cancelamento</label>
            <input type="text" className="form-control mb-3" placeholder="..." 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        example3: e.target.value
                    })
                }}
            />
            <label className="form-label">Link</label>
            <input type="text" className="form-control mb-3" placeholder="..." 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        example3: e.target.value
                    })
                }}
            />
            <input type="submit" className="btn btn-primary" value="Cadastrar" />
        </form>
    )
}
export default Form1