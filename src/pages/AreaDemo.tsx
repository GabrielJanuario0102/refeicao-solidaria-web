import { Link, Navigate } from 'react-router-dom';
import { useAuth, type TipoUsuario } from '../contexts/AuthContext';

const mensagens: Record<TipoUsuario, string> = {
  DOADOR: 'Aqui aparecerá a gestão de anúncios de alimentos nas próximas sprints.',
  INSTITUICAO: 'Aqui aparecerão as buscas e solicitações de doações nas próximas sprints.',
  VOLUNTARIO: 'Aqui aparecerá o acompanhamento de coletas e entregas nas próximas sprints.',
  ADMIN: 'Aqui aparecerão as ferramentas administrativas nas próximas sprints.',
};

export function AreaDemo() {
  const { usuario, logout } = useAuth();
  if (!usuario) return <Navigate to="/login" replace />;

  return (
    <section className="container section narrow">
      <h1>Área de demonstração</h1>
      <p>Olá, {usuario.nome}! Você está usando o perfil <strong>{usuario.tipo}</strong>.</p>
      <p>{mensagens[usuario.tipo]}</p>
      <p className="demo-alert">Esta tela não é um painel final nem possui autorização por perfil no servidor.</p>
      <button type="button" className="button button-secondary" onClick={logout}>Sair</button>
      <p><Link to="/">Voltar para o início</Link></p>
    </section>
  );
}
