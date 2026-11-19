import { Link } from 'react-router-dom';
type Props = { titulo: string; descricao: string };
export function EmBreve({ titulo, descricao }: Props) {
  return <section className="container section narrow"><p className="eyebrow">Próxima etapa</p><h1>{titulo}</h1><p className="lead">{descricao}</p>
    <p>O fluxo funcional será desenvolvido na Sprint 2. Esta é apenas uma página informativa para que o visitante não encontre links quebrados na Sprint 1.</p>
    <Link className="button button-secondary" to="/">Voltar ao início</Link></section>;
}
