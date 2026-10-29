import { Link } from "react-router-dom";

function NaoEncontrada() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Página não encontrada</h1>
      <Link to="/" className="text-blue-600 underline">
        Voltar para o calendário
      </Link>
    </main>
  );
}

export default NaoEncontrada;
