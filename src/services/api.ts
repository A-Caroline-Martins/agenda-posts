import type { Cliente, Post, Usuario } from "../types";

export const API_URL = "http://localhost:3001";

async function request<T>(caminho: string, opcoes?: RequestInit): Promise<T> {
  const resposta = await fetch(`${API_URL}${caminho}`, {
    headers: { "Content-Type": "application/json" },
    ...opcoes,
  });

  if (!resposta.ok) {
    throw new Error(`Erro ${resposta.status} ao acessar ${caminho}`);
  }

  return resposta.json() as Promise<T>;
}

// Posts
export const getPosts = () => request<Post[]>("/posts");

export const getPostById = (id: string) => request<Post>(`/posts/${id}`);

export const getPostsByCliente = (clienteId: string) =>
  request<Post[]>(`/posts?clienteId=${clienteId}`);

export const criarPost = (post: Omit<Post, "id">) =>
  request<Post>("/posts", { method: "POST", body: JSON.stringify(post) });

export const atualizarPost = (id: string, dados: Partial<Post>) =>
  request<Post>(`/posts/${id}`, { method: "PATCH", body: JSON.stringify(dados) });

export const excluirPost = (id: string) =>
  request<void>(`/posts/${id}`, { method: "DELETE" });

// Clientes
export const getClientes = () => request<Cliente[]>("/clientes");

export const getClienteById = (id: string) => request<Cliente>(`/clientes/${id}`);

// Usuários
export const getUsuarios = () => request<Usuario[]>("/usuarios");
