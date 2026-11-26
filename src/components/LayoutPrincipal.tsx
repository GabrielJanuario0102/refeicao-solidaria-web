import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function LayoutPrincipal({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="conteudo" className="main-content">{children}</main>
      <Footer />
    </>
  );
}
