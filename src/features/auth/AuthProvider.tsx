import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { buscarUsuarioPorLogin } from "../../services/api";
import type { Usuario } from "../../types";

const CHAVE_STORAGE = "agenda-posts:usuario";

function lerUsuarioSalvo(): Usuario | null {
  try {
    const salvo = localStorage.getItem(CHAVE_STORAGE);
    return salvo ? (JSON.parse(salvo) as Usuario) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(lerUsuarioSalvo);

  async function login(identificador: string) {
    const encontrado = await buscarUsuarioPorLogin(identificador);
    if (!encontrado) {
      throw new Error("Usuário não encontrado");
    }
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(encontrado));
    setUsuario(encontrado);
  }

  function logout() {
    localStorage.removeItem(CHAVE_STORAGE);
    setUsuario(null);
  }

  return (
    <AuthContext.Provider
      value={{ usuario, isAdmin: usuario?.tipo === "admin", login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}