import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";
import type { TipoConta } from "../types";

interface RotaProtegidaProps {
  permitido?: TipoConta[];
}

function RotaProtegida({ permitido }: RotaProtegidaProps) {
  const { usuario } = useAuth();

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  if (permitido && !permitido.includes(usuario.tipo)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default RotaProtegida;