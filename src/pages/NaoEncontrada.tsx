import { Link } from "react-router-dom";
import "./NaoEncontrada.css";

function NaoEncontrada() {
  return (
    <main className="nao-encontrada">
      <h1 className="pagina__titulo">Página não encontrada</h1>
      <Link to="/" className="nao-encontrada__link">
        Voltar para o calendário
      </Link>
    </main>
  );
}

export default NaoEncontrada;
