import { Link, NavLink } from "react-router-dom"

const Header = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Cancelados</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink to="/" className={() => {return ({ isActive }) => isActive ? "active" : undefined, "nav-link"}}>Cancelados</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/registration" className={() => {return ({ isActive }) => isActive ? "active" : undefined, "nav-link"}}>Cadastro</NavLink>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control custom-search mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                    </form>
                    <Link to="/search" class="btn btn-outline-light my-2 my-sm-0" >Buscar</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header