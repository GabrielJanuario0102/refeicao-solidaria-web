import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, type TipoUsuario } from '../contexts/AuthContext';

export function Cadastro() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [tipo, setTipo] = useState<TipoUsuario>('DOADOR');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [documento, setDocumento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [tipoDoador, setTipoDoador] = useState('pessoa');
  const [frequencia, setFrequencia] = useState('pontual');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('finais de semana');
  const [possuiVeiculo, setPossuiVeiculo] = useState(false);
  const [departamento, setDepartamento] = useState('');
  const [erro, setErro] = useState('');

  function cadastrar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setErro('');

    if (senha.length < 6) {
      setErro('Use pelo menos 6 caracteres na senha de demonstração.');
      return;
    }
    if (senha !== confirmarSenha) {
      setErro('A confirmação de senha não corresponde.');
      return;
    }
    if (tipo === 'INSTITUICAO' && (!razaoSocial.trim() || !responsavel.trim())) {
      setErro('Preencha a razão social e o responsável da instituição.');
      return;
    }
    if (tipo === 'ADMIN' && !departamento.trim()) {
      setErro('Informe o departamento para a demonstração.');
      return;
    }

    // Apenas a sessão do navegador é salva; a senha não é armazenada.
    login({ nome: nome.trim(), email: email.trim(), tipo, telefone, documento, endereco });
    navigate('/area-demo');
  }

  return (
    <section className="container section narrow">
      <h1>Cadastro</h1>
      <p>Escolha como deseja participar do Refeição Solidária.</p>
      <p className="demo-alert">Este cadastro é de demonstração. Não use dados reais ou senhas pessoais.</p>
      <form onSubmit={cadastrar} className="form-card">
        <label htmlFor="tipo">Perfil</label>
        <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value as TipoUsuario)}>
          <option value="DOADOR">Doador</option>
          <option value="INSTITUICAO">Instituição beneficiária</option>
          <option value="VOLUNTARIO">Voluntário</option>
          <option value="ADMIN">Administrador (teste)</option>
        </select>
        <label htmlFor="nome">Nome</label>
        <input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="telefone">Telefone</label>
        <input id="telefone" type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        <label htmlFor="documento">CPF ou CNPJ</label>
        <input id="documento" value={documento} onChange={(e) => setDocumento(e.target.value)} required />
        <label htmlFor="endereco">Endereço</label>
        <input id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />

        {tipo === 'DOADOR' && (
          <>
            <label htmlFor="tipo-doador">Tipo de doador</label>
            <select id="tipo-doador" value={tipoDoador} onChange={(e) => setTipoDoador(e.target.value)}>
              <option value="pessoa">Pessoa física</option>
              <option value="empresa">Empresa / estabelecimento</option>
            </select>
            <label htmlFor="frequencia">Frequência das doações</label>
            <select id="frequencia" value={frequencia} onChange={(e) => setFrequencia(e.target.value)}>
              <option value="pontual">Pontual</option>
              <option value="frequente">Frequente</option>
            </select>
          </>
        )}
        {tipo === 'INSTITUICAO' && (
          <>
            <label htmlFor="razao-social">Razão social</label>
            <input id="razao-social" value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} required />
            <label htmlFor="responsavel">Responsável legal</label>
            <input id="responsavel" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} required />
            <p className="form-tip">O envio de comprovantes e a aprovação pela equipe ficam para etapas posteriores.</p>
          </>
        )}
        {tipo === 'VOLUNTARIO' && (
          <>
            <label htmlFor="disponibilidade">Disponibilidade</label>
            <select id="disponibilidade" value={disponibilidade} onChange={(e) => setDisponibilidade(e.target.value)}>
              <option value="finais de semana">Finais de semana</option>
              <option value="dias uteis">Dias úteis</option>
              <option value="flexivel">Horário flexível</option>
            </select>
            <label className="form-check">
              <input type="checkbox" checked={possuiVeiculo} onChange={(e) => setPossuiVeiculo(e.target.checked)} />
              Possuo veículo
            </label>
          </>
        )}
        {tipo === 'ADMIN' && (
          <>
            <label htmlFor="departamento">Departamento</label>
            <input id="departamento" value={departamento} onChange={(e) => setDepartamento(e.target.value)} required />
            <p className="form-tip">Selecionar este perfil não concede permissão administrativa real.</p>
          </>
        )}

        <label htmlFor="senha">Senha de demonstração</label>
        <input id="senha" type="password" minLength={6} value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <label htmlFor="confirmar-senha">Confirmar senha</label>
        <input id="confirmar-senha" type="password" minLength={6} value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />
        {erro && <p role="alert" className="form-error">{erro}</p>}
        <button className="button button-primary" type="submit">Cadastrar na demonstração</button>
      </form>
      <p>Já quer testar o acesso? <Link to="/login">Entrar</Link></p>
    </section>
  );
}
