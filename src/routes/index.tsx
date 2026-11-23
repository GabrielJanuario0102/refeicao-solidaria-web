import { Link, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Sobre } from '../pages/Sobre';
import { ComoFunciona } from '../pages/ComoFunciona';
import { Cadastro } from '../pages/Cadastro';
import { Login } from '../pages/Login';
import { AreaDemo } from '../pages/AreaDemo';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/como-funciona" element={<ComoFunciona />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/area-demo" element={<AreaDemo />} />
      <Route path="*" element={
        <section className="container section narrow">
          <h1>Página não encontrada</h1>
          <p>O endereço solicitado não existe.</p>
          <Link to="/">Voltar ao início</Link>
        </section>
      } />
    </Routes>
  );
}
