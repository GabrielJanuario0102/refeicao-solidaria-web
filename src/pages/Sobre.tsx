import { Link } from 'react-router-dom';
export function Sobre() {
  return <section className="container section narrow">
    <p className="eyebrow">Quem somos</p>um
    <h1>Sobre o projeto</h1>
    <p className="lead">O Refeição Solidária é uma proposta de plataforma social para ajudar a reduzir o desperdício alimentar e apoiar instituições comunitárias.</p>
    <p>Nosso objetivo é conectar estabelecimentos e pessoas que podem doar alimentos, instituições que precisam de apoio e voluntários dispostos a ajudar na logística. A primeira versão é um projeto em desenvolvimento, não um serviço de distribuição alimentar em operação.</p>
    <h2>Quem participa?</h2>
    <ul className="simple-list"><li><strong>Doadores:</strong> disponibilizam alimentos e acompanham solicitações.</li><li><strong>Instituições:</strong> procuram ofertas e solicitam doações.</li><li><strong>Voluntários:</strong> colaboram no transporte.</li><li><strong>Administradores:</strong> acompanham cadastros e a operação demonstrativa da plataforma.</li></ul>
    <Link className="button button-primary" to="/como-funciona">Veja como funciona</Link>
  </section>;
}