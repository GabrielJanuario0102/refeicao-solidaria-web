import { Link } from 'react-router-dom';

export function AcessoNegado() {
  return (
    <section className="container section narrow">
      <h1>Acesso negado</h1>
      <p>Este painel não corresponde ao perfil selecionado na sua sessão demonstrativa.</p>
      <p><Link to="/painel">Voltar para minha área</Link></p>
    </section>
  );
}
