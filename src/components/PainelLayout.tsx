import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import '../styles/painel.css';

export function PainelLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container painel-wrapper">
      <Sidebar />
      <div className="painel-conteudo">{children}</div>
    </div>
  );
}
