import { Link } from 'react-router-dom';
const etapas = [
  { numero:'01', icone:'🍲', titulo:'Doadores publicam', descricao:'Restaurantes e pessoas doadoras poderão cadastrar alimentos disponíveis, incluindo orientações de conservação e prazo de retirada.' },
  { numero:'02', icone:'🏛️', titulo:'Instituições solicitam', descricao:'Instituições cadastradas poderão consultar ofertas e solicitar as quantidades necessárias.' },
  { numero:'03', icone:'🚚', titulo:'Voluntários apoiam', descricao:'Voluntários poderão acompanhar e apoiar as etapas de coleta e entrega de alimentos.' },
];
export function ComoFunciona() {
  return <section className="container section">
    <div className="section-heading"><p className="eyebrow">Da oferta ao destino</p><h1>Como funciona</h1>
      <p>Uma jornada colaborativa entre doadores, instituições e voluntários, com funcionalidades planejadas para as próximas sprints.</p></div>
    <div className="card-grid">
      {etapas.map(e => <article className="info-card" key={e.numero}>
        <span className="step-number">Etapa {e.numero}</span><div className="card-icon">{e.icone}</div><h2>{e.titulo}</h2><p>{e.descricao}</p>
      </article>)}
    </div>
    <div className="center-actions"><Link className="button button-primary" to="/cadastro">Quero participar</Link></div>
  </section>;
}
