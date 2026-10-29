export type TipoConta = "admin" | "cliente";

export type RedeSocial =
  | "instagram"
  | "facebook"
  | "linkedin"
  | "tiktok"
  | "youtube";

export type FormatoPost = "imagem" | "carrossel" | "video" | "reels" | "story";

export type StatusPost =
  | "rascunho"
  | "aguardando_aprovacao"
  | "ajustes_solicitados"
  | "aprovado"
  | "publicado";

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  nomeUsuario: string; // como no Instagram: letras, números, ponto e _
  tipo: TipoConta;
  clienteId?: string;
}

export interface Cliente {
  id: string;
  nome: string;
  logo?: string;
  redesSociais: RedeSocial[];
  responsavel: string;
}

export interface Comentario {
  id: string;
  autorId: string;
  texto: string;
  criadoEm: string;
}

export interface EventoHistorico {
  status: StatusPost;
  usuarioId: string;
  data: string; // ISO 8601
}

export interface Post {
  id: string;
  clienteId: string;
  titulo: string;
  legenda: string;
  redeSocial: RedeSocial;
  formato: FormatoPost;
  midias: string[];
  dataHoraPublicacao: string;
  status: StatusPost;
  criadoPor: string;
  comentarios: Comentario[];
  historico: EventoHistorico[];
}
