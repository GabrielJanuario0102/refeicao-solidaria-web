import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth, type TipoUsuario } from '../contexts/AuthContext';

interface Props {
  tiposPermitidos: TipoUsuario[];
  children: ReactNode;
}

export function RoleProtectedRoute({ tiposPermitidos, children }: Props) {
  const { usuario } = useAuth();
  if (!usuario) return <Navigate to="/login" replace />;
  if (!tiposPermitidos.includes(usuario.tipo)) {
    return <Navigate to="/acesso-negado" replace />;
  }
  return <>{children}</>;
}
