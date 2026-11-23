import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, type TipoUsuario } from '../contexts/AuthContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState<TipoUsuario>('DOADOR');
  const [erro, setErro] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  function entrar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setErro('');
    if (senha.length < 6) {
      setErro('A senha de demonstração deve ter no mínimo 6 caracteres.');
      return;
    }
    // Login apenas local. Nenhuma conta ou senha é conferida no servidor.
    login({ nome: email.split('@')[0], email: email.trim(), tipo });
    navigate('/area-demo');
  }

  return (
    <section className="container section narrow">
      <h1>Entrar</h1>
      <p>Teste o acesso conforme o perfil.</p>
      <p className="demo-alert">Modo demonstração: qualquer e-mail válido e senha de teste servem para entrar. Não use credenciais reais.</p>
      <form onSubmit={entrar} className="form-card">
        <label htmlFor="login-email">E-mail</label>
        <input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="login-senha">Senha de demonstração</label>
        <input id="login-senha" type="password" minLength={6} value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <label htmlFor="login-perfil">Perfil</label>
        <select id="login-perfil" value={tipo} onChange={(e) => setTipo(e.target.value as TipoUsuario)}>
          <option value="DOADOR">Doador</option>
          <option value="INSTITUICAO">Instituição</option>
          <option value="VOLUNTARIO">Voluntário</option>
          <option value="ADMIN">Administrador (teste)</option>
        </select>
        {erro && <p role="alert" className="form-error">{erro}</p>}
        <button className="button button-primary" type="submit">Acessar demonstração</button>
      </form>
      <p>Não tem cadastro? <Link to="/cadastro">Cadastre-se</Link></p>
    </section>
  );
}
