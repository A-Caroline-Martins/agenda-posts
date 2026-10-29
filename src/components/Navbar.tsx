import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Calendário</Link>
                </li>
                <li>
                    <Link to="/clientes">Clientes</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;