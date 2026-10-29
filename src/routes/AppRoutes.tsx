import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Calendario from "../pages/Calendario";
import DetalhesPost from "../pages/DetalhesPost";
import FormularioPost from "../pages/FormularioPost";
import Clientes from "../pages/Clientes";
import NaoEncontrada from "../pages/NaoEncontrada";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Calendario />} />
      <Route path="/posts/novo" element={<FormularioPost />} />
      <Route path="/posts/:id" element={<DetalhesPost />} />
      <Route path="/posts/:id/editar" element={<FormularioPost />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="*" element={<NaoEncontrada />} />
    </Routes>
  );
}

export default AppRoutes;
