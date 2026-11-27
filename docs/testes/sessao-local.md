# REF-29 — Sessão local e permissões demonstrativas

**Objetivo:** verificar redirecionamento, persistência e encerramento da sessão do React (REF-22 + REF-31).

| Caso | Passo | Esperado | Resultado | Evidência |
|---|---|---|---|---|
| S01 | Fazer login demonstrativo e atualizar `/painel` | Sessão permanece | OK | Executado na REF-22: após login como Doador, a sessão permaneceu no localStorage e no cabeçalho após acessar `/painel`. A rota ainda exibiu “Página não encontrada” nessa branch. |
| S02 | Fechar/reabrir a aba e acessar `/painel` | Sessão persiste no mesmo navegador até Sair/limpeza local | OK | Executado na REF-22: uma nova aba no mesmo contexto manteve a sessão no localStorage e no cabeçalho. `/painel` ainda não existia nessa branch. |
| S03 | Clicar em Sair e acessar `/painel` | Redireciona para login | OK | Confirmado manualmente pelo usuário na REF-31: após sair, acessar `/painel` redirecionou para `/login`. |
| S04 | Sem sessão, abrir `/area-demo` | Redireciona para login | OK | Sem sessão, `/area-demo` redirecionou para `/login`; confirmado também pelo usuário na REF-31. |
| S05 | Com sessão, abrir `/area-demo` | Redireciona ao painel do próprio perfil | OK | Confirmado manualmente pelo usuário na REF-31: `/area-demo` redirecionou para o painel correspondente ao perfil autenticado. |
| S06 | Testar em janela anônima | Não compartilha sessão do navegador habitual | OK | Teste manual informado pelo usuário: a janela anônima redirecionou para `/login`, sem compartilhar a sessão. |
| S07 | Testar outra rota de perfil | Exibe acesso negado | OK | Confirmado manualmente pelo usuário na REF-31: com sessão de Doador, acessar `/painel/admin` exibiu acesso negado. |

## Anotação de execução

- Data: 2026-11-27 (execução em REF-22 + REF-31 às 08:18; confirmações manuais em REF-31 entre 08:29 e 08:48, UTC-03)
- Versão/PR: S01-S02 executados na branch feat/REF-22-cadastro-login, S03-S07  na REF-31, que inclui REF-22
- Casos OK: S01, S02, S03, S04, S05, S06, S07
- Casos FALHOU: Nenhum
- Casos BLOQUEADO: Nenhum
- Link dos bugs no Jira: Não informado
- Conclusão: Os sete casos passaram considerando as duas execuções. A REF-22 confirmou persistência da sessão após reload e em nova aba. Na REF-31 foram confirmados logout, redirecionamentos por sessão, acesso ao painel do próprio perfil e bloqueio de perfil diferente; o teste em janela anônima confirmou que a sessão não é compartilhada.

