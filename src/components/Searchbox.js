import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Searchbox = ()     => {

    const [Query, setQuery] = useState(undefined)
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

         navigate(`../search?query=${Query}`, {replace : true})
         navigate(0)
    }

    return (
        <form className="form-inline my-2 my-lg-0 d-inline" onSubmit={handleSubmit} >
            <input className="form-control custom-search mr-sm-2" type="search" placeholder="Buscar por nome..." aria-label="Buscar por nome..."                 
                onChange={e => setQuery(e.target.value)}
            />
        </form>
    )
}

export default Searchbox