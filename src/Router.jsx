import { Routes, Route } from "react-router-dom";
import Home from './routes/Home.jsx'
import Aruba from './routes/Aruba.jsx'
import China from './routes/China.jsx'
import Escocia from './routes/Escocia.jsx'
import GrandCanyon from './routes/GrandCanyon.jsx'

export default function MainRoutes() {
  return (
    <Routes>
      {/* Rotas dentro do app  */}
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/China" element={<China />} />
        <Route path="/Aruba" element={<Aruba />} />
        <Route path="/GrandCanyona" element={<Escocia />} />
        <Route path="MeioPagamento" element={<GrandCanyon />} />
      </Route>
    </Routes>
  );
}
