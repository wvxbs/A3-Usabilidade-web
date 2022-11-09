import { useState } from "react"

const Form1 = () => {

    const [form, setForm] = useState({
        example1: "",
        example2: "",
        example3: ""
      })

    const Register = () => {
        if(ValidateForm)
            console.log(form)
    }

    const ValidateForm = () => {
        if(form.example1 === "") return false
        if(form.example2 === "") return false
        if(form.example3 === "") return false
        
        return true
    }

     return (
        <div className="mb-5">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control mb-3" placeholder="nome" 
                onChange={e => {
                    setForm({
                        ...form,
                        example1: e.target.value
                    })
                }}
            />
            <label className="form-label">Email</label>
            <input type="text" className="form-control mb-3" placeholder="exemplo@email.com" 
                onChange={e => {
                    setForm({
                        ...form,
                        example2: e.target.value
                    })
                }}
            />
            <label className="form-label">Senha</label>
            <input type="password" className="form-control mb-3" placeholder="..." 
                onChange={e => {
                    setForm({
                        ...form,
                        example3: e.target.value
                    })
                }}
            />
            <button className="btn btn-primary" onClick={Register}>Cadastrar</button>
        </div>
    )
}
export default Form1