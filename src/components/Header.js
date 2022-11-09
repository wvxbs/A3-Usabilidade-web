import { Link, NavLink } from "react-router-dom"

const Header = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">A3</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink to="/" className={() => {return ({ isActive }) => isActive ? "active" : undefined, "nav-link"}}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/detail" className={() => {return ({ isActive }) => isActive ? "active" : undefined, "nav-link"}}>Detail</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header