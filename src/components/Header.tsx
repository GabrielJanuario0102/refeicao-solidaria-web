import { Link, NavLink } from 'react-router-dom';

export function Header() {
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
          <Link className="text-link" to="/login">Entrar</Link>
          <Link className="button button-primary button-small" to="/cadastro">Cadastrar</Link>
        </div>
      </div>
    </header>
  );
}
