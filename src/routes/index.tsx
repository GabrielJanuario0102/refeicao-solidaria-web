import { Link, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Sobre } from '../pages/Sobre';
import { ComoFunciona } from '../pages/ComoFunciona';
import { EmBreve } from '../pages/EmBreve';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/como-funciona" element={<ComoFunciona />} />
      <Route path="/login" element={<EmBreve titulo="Entrar" descricao="Login por perfil em preparação." />} />
      <Route path="/cadastro" element={<EmBreve titulo="Cadastrar" descricao="Cadastro de usuários em preparação." />} />
      <Route
        path="*"
        element={
          <section className="container section narrow">
            <h1>Página não encontrada</h1>
            <p>O endereço solicitado não existe.</p>
            <Link to="/">Voltar ao início</Link>
          </section>
        }
      />
    </Routes>
  );
}
