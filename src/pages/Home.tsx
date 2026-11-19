import { Link } from 'react-router-dom';
export function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">🌱 Projeto Refeição Solidária</p>
            <h1>Conectando solidariedade a quem mais precisa.</h1>
            <p className="lead">Uma ponte entre pessoas e estabelecimentos doadores, instituições comunitárias e voluntários que apoiam a entrega de alimentos.</p>
            <div className="actions">
              <Link to="/como-funciona" className="button button-primary">Entenda como funciona</Link>
              <Link to="/cadastro" className="button button-secondary">Quero ajudar</Link>
            </div>
            <p className="disclaimer">Projeto em desenvolvimento · O cadastro será implementado na Sprint 2.</p>
          </div>
          <div className="hero-visual" aria-label="Fluxo solidário entre doadores, instituições e voluntários">
            <div className="visual-card"><span>🍲</span><div><strong>Doadores</strong><small>Compartilham excedentes</small></div></div>
            <span className="visual-arrow" aria-hidden="true">↓</span>
            <div className="visual-card"><span>🏛️</span><div><strong>Instituições</strong><small>Solicitam alimentos</small></div></div>
            <span className="visual-arrow" aria-hidden="true">↓</span>
            <div className="visual-card"><span>🚚</span><div><strong>Voluntários</strong><small>Apoiam o transporte</small></div></div>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading"><p className="eyebrow">Nosso propósito</p><h2>Menos desperdício, mais conexões</h2>
          <p>O Refeição Solidária foi pensado para aproximar quem pode doar de quem precisa receber, com apoio logístico de voluntários.</p></div>
        <div className="card-grid">
          <article className="info-card"><span className="card-icon">🍲</span><h3>Compartilhar</h3><p>Doadores poderão publicar ofertas de alimentos e acompanhar pedidos.</p></article>
          <article className="info-card"><span className="card-icon">🏛️</span><h3>Solicitar</h3><p>Instituições poderão encontrar doações e solicitar quantidades disponíveis.</p></article>
          <article className="info-card"><span className="card-icon">🚚</span><h3>Transportar</h3><p>Voluntários poderão colaborar nas etapas de coleta e entrega.</p></article>
        </div>
      </section>
    </>
  );
}
