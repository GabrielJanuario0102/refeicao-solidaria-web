import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Sobre } from '../pages/Sobre';
import { ComoFunciona } from '../pages/ComoFunciona';
import { Cadastro } from '../pages/Cadastro';
import { Login } from '../pages/Login';
import { PainelPerfil } from '../pages/PainelPerfil';
import { AcessoNegado } from '../pages/AcessoNegado';
import { AprovacaoPendente } from '../pages/AprovacaoPendente';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { RoleProtectedRoute } from '../components/RoleProtectedRoute';
import { caminhoPainel } from '../components/Sidebar';
import { useAuth, type TipoUsuario } from '../contexts/AuthContext';

function IrParaMeuPainel() {
  const { usuario } = useAuth();
  if (!usuario) return <Navigate to="/login" replace />;
  return <Navigate to={caminhoPainel[usuario.tipo]} replace />;
}

const perfis: { tipo: TipoUsuario; caminho: string }[] = [
  { tipo: 'DOADOR', caminho: 'doador' },
  { tipo: 'INSTITUICAO', caminho: 'instituicao' },
  { tipo: 'VOLUNTARIO', caminho: 'voluntario' },
  { tipo: 'ADMIN', caminho: 'admin' },
];

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/como-funciona" element={<ComoFunciona />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/area-demo" element={<IrParaMeuPainel />} />
      <Route path="/painel" element={<ProtectedRoute><IrParaMeuPainel /></ProtectedRoute>} />
      {perfis.map(({ tipo, caminho }) => (
        <Route
          key={tipo}
          path={`/painel/${caminho}`}
          element={<RoleProtectedRoute tiposPermitidos={[tipo]}><PainelPerfil tipo={tipo} /></RoleProtectedRoute>}
        />
      ))}
      <Route path="/acesso-negado" element={<ProtectedRoute><AcessoNegado /></ProtectedRoute>} />
      <Route path="/aprovacao-pendente" element={<ProtectedRoute><AprovacaoPendente /></ProtectedRoute>} />
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
