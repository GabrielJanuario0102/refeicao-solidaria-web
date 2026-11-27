# REF-29 — Casos de teste de navegação por perfil
 
**Sprint:** 3 — Modelagem e interface  
**Testador:** Robson  
**Base:** `main` após integrar REF-31  
**Resultados:** 12 casos aprovados; nenhum caso falhou.

Use contas de demonstração **fictícias**. Os quatro perfis são escolhidos no cadastro/login demonstrativo. Não existe autenticação real via API nesta sprint.

| Caso | Perfil/sessão | Ação | Esperado | Resultado | Evidência |
|---|---|---|---|---|---|
| N01 | Sem sessão | Abrir `/` | Página pública abre | OK | Página inicial carregou com os links públicos e o conteúdo da plataforma. |
| N02 | Sem sessão | Abrir `/sobre` e `/como-funciona` | Ambas abrem sem login | OK | As duas páginas carregaram corretamente sem sessão. |
| N03 | Sem sessão | Abrir `/painel` | Redireciona a `/login` | OK | Redirecionou para `/login`. |
| N04 | Doador | Entrar e abrir `/painel` | Vai ao painel do doador | OK | Login demonstrativo redirecionou para `/painel/doador`, com título “Painel do doador”. |
| N05 | Doador | Abrir `/painel/admin` | Mostra acesso negado | OK | Redirecionou para `/acesso-negado` e mostrou “Acesso negado”. |
| N06 | Instituição | Abrir `/painel/instituicao` | Painel institucional | OK | Mostrou “Painel da instituição” com a sessão da Instituição. |
| N07 | Instituição | Abrir `/painel/doador` | Mostra acesso negado | OK | Redirecionou para `/acesso-negado` e mostrou “Acesso negado”. |
| N08 | Voluntário | Abrir `/painel/voluntario` | Painel do voluntário | OK | Mostrou “Painel do voluntário” com a sessão de Voluntário. |
| N09 | Administrador | Abrir `/painel/admin` | Painel administrativo | OK | Mostrou “Painel administrativo” com a sessão de Administrador. |
| N10 | Com sessão | Abrir `/aprovacao-pendente` | Tela informativa é mostrada | OK | Com sessão de Administrador, mostrou “Aprovação pendente” e o texto informativo. |
| N11 | Sem sessão | Abrir `/aprovacao-pendente` | Redireciona para `/login` | OK | Após sair, o acesso redirecionou para `/login`. |
| N12 | Com sessão | Navegar pela barra lateral | Vai ao painel correto sem trocar de perfil | OK | Na sessão de Instituição, “Visão geral” manteve `/painel/instituicao` e o título/perfil da Instituição. |

**Legenda:** OK = esperado, FALHOU = diferente do esperado, BLOQUEADO = não foi possível executar.  
**Nota:** a tela de aprovação pendente é apenas informativa; não existe decisão de aprovação do servidor nesta sprint.

## Registro

- Data/hora: 2026-11-26 17:12 (UTC-03)
- Commit/PR da REF-31 testado: REF-29 — Casos de teste de navegação por perfil
- Navegador e sistema: Chromi, Linux
- Resultados e problemas: 12 casos OK, nenhum FALHOU ou BLOQUEADO.
- Prints/capturas: evidências registradas a partir das páginas observadas no navegador.
