import { Link } from 'react-router-dom';

export function AprovacaoPendente() {
  return (
    <section className="container section narrow">
      <h1>Aprovação pendente</h1>
      <p>Esta é uma tela informativa prevista para perfis que dependam de aprovação.</p>
      <p>Na Sprint 3 ainda não há integração com um processo real de aprovação na API.</p>
      <p><Link to="/painel">Voltar para minha área</Link></p>
    </section>
  );
}
