import { useParams } from "react-router-dom";

function DetalhesPost() {
  const { id } = useParams();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Detalhes do post {id}</h1>
    </main>
  );
}

export default DetalhesPost;
