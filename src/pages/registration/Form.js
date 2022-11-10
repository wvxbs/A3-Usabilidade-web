import { useState } from "react"

const Form1 = () => {

    const [FormData, setFormData] = useState({
        example1: "",
        example2: "",
        example3: ""
      })

    const Register = () => {
        console.log(FormData)
        if(ValidateForm) {
            fetch("http://localhost:4040" + "/api/person/new", {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(FormData)
            }).catch(e => {
                alert('Cant complete request' + e.message); 
            })
        }
        else 
            alert('Error')
    }

    const ValidateForm = () => {
        if(FormData.example1 === "") return false
        if(FormData.example2 === "") return false
        if(FormData.example3 === "") return false
        
        return true
    }

     return (
        <div className="mb-5 col-md">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control mb-3" placeholder="nome" 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        example1: e.target.value
                    })
                }}
            />
            <label className="form-label">Titulo</label>
            <input type="text" className="form-control mb-3" placeholder="exemplo@email.com" 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        example2: e.target.value
                    })
                }}
            />
            <label className="form-label">Foto</label>
            <input type="text" className="form-control mb-3" placeholder="..." 
                onChange={e => {
                    setFormData({
                        ...FormData,
                        example3: e.target.value
                    })
                }}
            />
            <button className="btn btn-primary" onClick={Register}>Cadastrar</button>
        </div>
    )
}
export default Form1