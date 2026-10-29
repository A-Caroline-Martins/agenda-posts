import { useParams } from "react-router-dom";

// Usada tanto em /posts/novo quanto em /posts/:id/editar
function FormularioPost() {
  const { id } = useParams();
  const editando = Boolean(id);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">
        {editando ? `Editar post ${id}` : "Novo post"}
      </h1>
    </main>
  );
}

export default FormularioPost;
