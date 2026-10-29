import { createBrowserRouter, Outlet } from "react-router-dom";
import { AuthProvider } from "../features/auth/AuthProvider";
import RotaProtegida from "./RotaProtegida";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Calendario from "../pages/Calendario";
import DetalhesPost from "../pages/DetalhesPost";
import FormularioPost from "../pages/FormularioPost";
import Clientes from "../pages/Clientes";
import NaoEncontrada from "../pages/NaoEncontrada";

export const router = createBrowserRouter([
  {
    // Rota raiz: o AuthProvider envolve TUDO, inclusive o /login
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    children: [
      { path: "/login", element: <Login /> },

      {
        // Daqui para baixo: precisa estar logado
        element: <RotaProtegida />,
        children: [
          {
            path: "/",
            element: <Layout />,
            children: [
              { index: true, element: <Calendario /> },
              { path: "posts/:id", element: <DetalhesPost /> },

              {
                // Daqui para baixo: só admin
                element: <RotaProtegida permitido={["admin"]} />,
                children: [
                  { path: "posts/novo", element: <FormularioPost /> },
                  { path: "posts/:id/editar", element: <FormularioPost /> },
                  { path: "clientes", element: <Clientes /> },
                ],
              },
            ],
          },
        ],
      },

      { path: "*", element: <NaoEncontrada /> },
    ],
  },
]);