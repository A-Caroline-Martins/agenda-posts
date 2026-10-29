import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Calendario from "../pages/Calendario";
import DetalhesPost from "../pages/DetalhesPost";
import FormularioPost from "../pages/FormularioPost";
import Clientes from "../pages/Clientes";
import NaoEncontrada from "../pages/NaoEncontrada";

export const router = createBrowserRouter([
  // Fora do layout: sem Navbar
  { path: "/login", element: <Login /> },

  // Dentro do layout: com Navbar
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Calendario /> },
      { path: "posts/novo", element: <FormularioPost /> },
      { path: "posts/:id", element: <DetalhesPost /> },
      { path: "posts/:id/editar", element: <FormularioPost /> },
      { path: "clientes", element: <Clientes /> },
    ],
  },

  // Qualquer outra URL
  { path: "*", element: <NaoEncontrada /> },
]);