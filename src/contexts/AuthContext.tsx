import { createContext, useContext, useState, type ReactNode } from 'react';

export type TipoUsuario = 'DOADOR' | 'INSTITUICAO' | 'VOLUNTARIO' | 'ADMIN';

export type UsuarioDemo = {
  nome: string;
  email: string;
  tipo: TipoUsuario;
  telefone?: string;
  documento?: string;
  endereco?: string;
};

type AuthContextValue = {
  usuario: UsuarioDemo | null;
  login: (dados: UsuarioDemo) => void;
  logout: () => void;
};

const CHAVE_SESSAO = 'refeicao-solidaria-sessao-demo';
const AuthContext = createContext<AuthContextValue | null>(null);
const PERFIS: TipoUsuario[] = ['DOADOR', 'INSTITUICAO', 'VOLUNTARIO', 'ADMIN'];

function lerSessao(): UsuarioDemo | null {
  try {
    const salvo = localStorage.getItem(CHAVE_SESSAO);
    if (!salvo) return null;
    const dados: unknown = JSON.parse(salvo);
    if (typeof dados !== 'object' || dados === null) return null;
    const usuario = dados as Partial<UsuarioDemo>;
    if (typeof usuario.nome !== 'string' || typeof usuario.email !== 'string') return null;
    if (!usuario.tipo || !PERFIS.includes(usuario.tipo)) return null;
    return { nome: usuario.nome, email: usuario.email, tipo: usuario.tipo,
      telefone: usuario.telefone, documento: usuario.documento, endereco: usuario.endereco };
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<UsuarioDemo | null>(lerSessao);

  function login(dados: UsuarioDemo) {
    setUsuario(dados);
    localStorage.setItem(CHAVE_SESSAO, JSON.stringify(dados));
  }

  function logout() {
    setUsuario(null);
    localStorage.removeItem(CHAVE_SESSAO);
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const contexto = useContext(AuthContext);
  if (!contexto) throw new Error('useAuth deve ser usado dentro de AuthProvider');
  return contexto;
}
