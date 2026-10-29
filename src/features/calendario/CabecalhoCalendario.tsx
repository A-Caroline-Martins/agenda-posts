import { Link } from "react-router-dom";
import { addMonths, format, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useAuth } from "../auth/useAuth";
import "./CabecalhoCalendario.css";

interface CabecalhoCalendarioProps {
  mesAtual: Date;
  onMudarMes: (novaData: Date) => void;
}

function CabecalhoCalendario({ mesAtual, onMudarMes }: CabecalhoCalendarioProps) {
  const { isAdmin } = useAuth();

  return (
    <header className="cabecalho-calendario">
      {isAdmin ? (
        <Link to="/posts/novo" className="cabecalho-calendario__add">
          <Plus size={20} />
          Add Post
        </Link>
      ) : (
        <span />
      )}

      <div className="cabecalho-calendario__navegacao">
        <button
          type="button"
          className="cabecalho-calendario__hoje"
          onClick={() => onMudarMes(new Date())}
        >
          Hoje
        </button>

        <button
          type="button"
          className="cabecalho-calendario__seta"
          onClick={() => onMudarMes(subMonths(mesAtual, 1))}
          aria-label="Mês anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <h2 className="cabecalho-calendario__mes">
          {format(mesAtual, "MMM/yyyy", { locale: ptBR })}
        </h2>

        <button
          type="button"
          className="cabecalho-calendario__seta"
          onClick={() => onMudarMes(addMonths(mesAtual, 1))}
          aria-label="Próximo mês"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </header>
  );
}

export default CabecalhoCalendario;