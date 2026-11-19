import { Link } from 'react-router-dom';
export function Footer() {
  return <footer className="footer"><div className="container footer-inner">
    <span>© FIREFLYTECH · Refeição Solidária</span>
    <div><Link to="/sobre">Sobre</Link><Link to="/como-funciona">Como funciona</Link></div>
  </div></footer>;
}
