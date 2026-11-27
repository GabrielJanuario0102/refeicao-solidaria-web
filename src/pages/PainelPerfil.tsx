import type { TipoUsuario } from '../contexts/AuthContext';
import { useAuth } from '../contexts/AuthContext';
import { PainelLayout } from '../components/PainelLayout';

const textos: Record<TipoUsuario, { titulo: string; descricao: string; proximaEtapa: string }> = {
  DOADOR: {
    titulo: 'Painel do doador',
    descricao: 'Neste espaço você acompanhará os alimentos anunciados para doação.',
    proximaEtapa: 'Publicar e gerenciar doações será implementado na Sprint 4.',
  },
  INSTITUICAO: {
    titulo: 'Painel da instituição',
    descricao: 'Aqui a instituição acompanhará as ofertas e pedidos de alimentos.',
    proximaEtapa: 'Busca e solicitação de doações estão previstas para a Sprint 5.',
  },
  VOLUNTARIO: {
    titulo: 'Painel do voluntário',
    descricao: 'Aqui serão organizadas as coletas e as entregas de alimentos.',
    proximaEtapa: 'O acompanhamento de transporte está previsto para a Sprint 6.',
  },
  ADMIN: {
    titulo: 'Painel administrativo',
    descricao: 'Aqui ficarão os controles de usuários e o acompanhamento da plataforma.',
    proximaEtapa: 'Administração e relatórios serão implementados na Sprint 6.',
  },
};

export function PainelPerfil({ tipo }: { tipo: TipoUsuario }) {
  const { usuario } = useAuth();
  const conteudo = textos[tipo];

  return (
    <PainelLayout>
      <p className="eyebrow">Refeição Solidária · Sprint 3</p>
      <h1>{conteudo.titulo}</h1>
      <p>Olá, <strong>{usuario?.nome}</strong>!</p>
      <p>{conteudo.descricao}</p>
      <div className="painel-aviso">
        <strong>Área demonstrativa</strong>
        <p>{conteudo.proximaEtapa}</p>
        <p>Esta tela usa a sessão local do navegador, não autenticação real pela API.</p>
      </div>
    </PainelLayout>
  );
}
