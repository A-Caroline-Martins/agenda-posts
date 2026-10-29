import { useState } from "react";
import CabecalhoCalendario from "../features/calendario/CabecalhoCalendario";
import "./Calendario.css";

function Calendario() {
  const [mesAtual, setMesAtual] = useState(new Date());

  return (
    <main className="calendario-pagina">
      <aside>{/* PainelAprovacao entra aqui depois */}</aside>

      <section>
        <CabecalhoCalendario mesAtual={mesAtual} onMudarMes={setMesAtual} />
        {/* GradeMes entra aqui depois */}
      </section>
    </main>
  );
}

export default Calendario;