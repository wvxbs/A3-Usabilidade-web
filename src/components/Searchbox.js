import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Searchbox = ()     => {

    const [Query, setQuery] = useState(undefined)
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        return navigate("/search?query=" + Query)
    }

    return (
        <form className="form-inline my-2 my-lg-0 d-inline" onSubmit={handleSubmit} >
            <input className="form-control custom-search mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar"                 
                onChange={e => setQuery(e.target.value)}
            />
        </form>
    )
}

export default Searchbox