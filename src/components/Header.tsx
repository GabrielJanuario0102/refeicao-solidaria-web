import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Header() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  function sair() {
    logout();
    navigate('/');
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Refeição Solidária — início">
          <span className="brand-symbol" aria-hidden="true">🍲</span>
          <span>Refeição <strong>Solidária</strong></span>
        </Link>
        <nav aria-label="Navegação principal" className="nav-links">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/como-funciona">Como funciona</NavLink>
        </nav>
        <div className="header-actions">
          {usuario ? (
            <>
              <Link className="text-link" to="/area-demo">Minha área ({usuario.tipo})</Link>
              <button className="button button-secondary button-small" type="button" onClick={sair}>Sair</button>
            </>
          ) : (
            <>
              <Link className="text-link" to="/login">Entrar</Link>
              <Link className="button button-primary button-small" to="/cadastro">Cadastrar</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
