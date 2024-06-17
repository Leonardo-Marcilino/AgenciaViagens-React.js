import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Aruba from './routes/Aruba.jsx';
import China from './routes/China.jsx';
import Escocia from './routes/Escocia.jsx';
import GrandCanyon from './routes/GrandCanyon.jsx';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/China" element={<China />} />
        <Route path="/Aruba" element={<Aruba />} />
        <Route path="/GrandCanyon" element={<GrandCanyon />} />
        <Route path="/Escocia" element={<Escocia />} />
      </Route>
    </Routes>
  );
}
