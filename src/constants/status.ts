import type { StatusPost } from "../types";

// As cores vêm dos tokens de styles/cores.css
interface ConfigStatus {
  rotulo: string;
  cor: string;
}

export const STATUS: Record<StatusPost, ConfigStatus> = {
  rascunho: { rotulo: "Rascunho", cor: "var(--cor-status-rascunho)" },
  aguardando_aprovacao: { rotulo: "Aguardando aprovação", cor: "var(--cor-status-aguardando)" },
  ajustes_solicitados: { rotulo: "Ajustes solicitados", cor: "var(--cor-status-ajustes)" },
  aprovado: { rotulo: "Aprovado", cor: "var(--cor-status-aprovado)" },
  publicado: { rotulo: "Publicado", cor: "var(--cor-status-publicado)" },
};
