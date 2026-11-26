import { NavLink } from 'react-router-dom';
import { useAuth, type TipoUsuario } from '../contexts/AuthContext';

export const caminhoPainel: Record<TipoUsuario, string> = {
  DOADOR: '/painel/doador',
  INSTITUICAO: '/painel/instituicao',
  VOLUNTARIO: '/painel/voluntario',
  ADMIN: '/painel/admin',
};

export function Sidebar() {
  const { usuario } = useAuth();
  if (!usuario) return null;

  return (
    <aside className="painel-sidebar" aria-label="Menu do painel">
      <p className="painel-sidebar-titulo">Minha área</p>
      <nav className="painel-menu">
        <NavLink to={caminhoPainel[usuario.tipo]} end>Visão geral</NavLink>
        <NavLink to="/">Página inicial</NavLink>
      </nav>
    </aside>
  );
}
