import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { usuario, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  function sair() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li>
          <Link to="/">Calendário</Link>
        </li>
        {isAdmin && (
          <>
            <li>
              <Link to="/posts/novo">Novo post</Link>
            </li>
            <li>
              <Link to="/clientes">Clientes</Link>
            </li>
          </>
        )}
      </ul>

      <div className="navbar__usuario">
        <span>{usuario?.nome}</span>
        <span className="navbar__badge">
          {isAdmin ? "Admin" : "Cliente"}
        </span>
        <button onClick={sair} className="navbar__sair">
          Sair
        </button>
      </div>
    </nav>
  );
};

export default Navbar;