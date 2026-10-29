import { createContext } from "react";
import type { Usuario } from "../../types";

export interface AuthContextType {
  usuario: Usuario | null;
  isAdmin: boolean;
  login: (identificador: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);