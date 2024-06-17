import { Routes, Route } from "react-router-dom";


export default function MainRoutes() {
  return (
    <Routes>
  
      {/* Rotas dentro do perfil do usuário */}
      <Route path="/Perfil" element={<Perfil />}>
        <Route path="PainelInicial" element={<PainelInicial />} />
        <Route path="DadosPessoais" element={<DadosPessoais />} />
        <Route path="Agendamentos" element={<Agendamentos />} />
        <Route path="MeioPagamento" element={<MeioPagamento />} />
      </Route>
    </Routes>
  );
}
