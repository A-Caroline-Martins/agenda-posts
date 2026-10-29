import type { IconType } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import type { FormatoPost, RedeSocial } from "../types";

interface ConfigRede {
  nome: string;
  icone: IconType;
  cor: string;
  formatos: FormatoPost[];
  // Limite de caracteres da legenda/descrição (confira periodicamente: as redes mudam isso)
  limiteCaracteres: number;
}

export const REDES: Record<RedeSocial, ConfigRede> = {
  instagram: {
    nome: "Instagram",
    icone: FaInstagram,
    cor: "#E1306C",
    formatos: ["imagem", "carrossel", "reels", "story"],
    limiteCaracteres: 2200,
  },
  facebook: {
    nome: "Facebook",
    icone: FaFacebook,
    cor: "#1877F2",
    formatos: ["imagem", "carrossel", "video", "reels", "story"],
    limiteCaracteres: 63206,
  },
  linkedin: {
    nome: "LinkedIn",
    icone: FaLinkedin,
    cor: "#0A66C2",
    formatos: ["imagem", "carrossel", "video"],
    limiteCaracteres: 3000,
  },
  tiktok: {
    nome: "TikTok",
    icone: FaTiktok,
    cor: "#000000",
    formatos: ["video", "carrossel"],
    limiteCaracteres: 4000,
  },
  youtube: {
    nome: "YouTube",
    icone: FaYoutube,
    cor: "#FF0000",
    formatos: ["video"],
    limiteCaracteres: 5000,
  },
};

export const FORMATOS: Record<FormatoPost, { nome: string; tipoMidia: "imagem" | "video" }> = {
  imagem: { nome: "Imagem", tipoMidia: "imagem" },
  carrossel: { nome: "Carrossel", tipoMidia: "imagem" },
  video: { nome: "Vídeo", tipoMidia: "video" },
  reels: { nome: "Reels", tipoMidia: "video" },
  story: { nome: "Story", tipoMidia: "imagem" },
};
