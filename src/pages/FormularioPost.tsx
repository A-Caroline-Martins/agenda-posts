import { useParams } from "react-router-dom";

// Usada tanto em /posts/novo quanto em /posts/:id/editar
function FormularioPost() {
  const { id } = useParams();
  const editando = Boolean(id);

  return (
    <main className="pagina">
      <h1 className="pagina__titulo">
        {editando ? `Editar post ${id}` : "Novo post"}
      </h1>
    </main>
  );
}

export default FormularioPost;
