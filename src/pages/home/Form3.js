import { useState } from "react"

const Form3 = () => {

    const [form, setForm] = useState({
        example1: '',
        example2: '',
        example3: ''
      })

     return (
        <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control" placeholder="nome" 
                onChange={e => {
                    setForm({
                        ...form,
                        example1: e.target.value
                    })
                }}
            />
            <label className="form-label">Email</label>
            <input type="text" className="form-control" placeholder="exemplo@email.com" 
                onChange={e => {
                    setForm({
                        ...form,
                        example2: e.target.value
                    })
                }}
            />
            <label className="form-label">Senha</label>
            <input type="password" className="form-control" placeholder="..." 
                onChange={e => {
                    setForm({
                        ...form,
                        example3: e.target.value
                    })
                }}
            />
        </div>
    )
}
export default Form3