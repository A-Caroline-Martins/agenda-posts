import type { StatusPost } from "../types";

interface ConfigStatus {
  rotulo: string;
  cor: string;
}

export const STATUS: Record<StatusPost, ConfigStatus> = {
  rascunho: { rotulo: "Rascunho", cor: "#9CA3AF" },
  aguardando_aprovacao: { rotulo: "Aguardando aprovação", cor: "#F59E0B" },
  ajustes_solicitados: { rotulo: "Ajustes solicitados", cor: "#EF4444" },
  aprovado: { rotulo: "Aprovado", cor: "#10B981" },
  publicado: { rotulo: "Publicado", cor: "#3B82F6" },
};
