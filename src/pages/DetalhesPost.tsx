import { useParams } from "react-router-dom";

function DetalhesPost() {
  const { id } = useParams();

  return (
    <main className="pagina">
      <h1 className="pagina__titulo">Detalhes do post {id}</h1>
    </main>
  );
}

export default DetalhesPost;
