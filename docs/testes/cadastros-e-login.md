# REF-20 — Relatório de testes de cadastro e login demonstrativo

**Sprint:** 2  
**Responsável:** Gabriel  
**Repositório:** `refeicao-solidaria-web`

## Resultados dos testes

| ID | Cenário | Resultado |
|---|---|---|
| T01 | Abrir cadastro | OK |
| T02 | Campos do doador | OK |
| T03 | Campos da instituição | OK |
| T04 | Campos do voluntário | OK |
| T05 | Campos do administrador | OK |
| T06 | E-mail inválido | OK |
| T07 | Senhas divergentes | OK |
| T08 | Senha curta | OK |
| T09 | Cadastro válido | OK |
| T10 | Sessão após recarregar | OK |
| T11 | Login demonstrativo | OK |
| T12 | Acesso sem sessão | OK |
| T13 | Encerrar sessão | OK |
| T14 | Navegação pública | OK |

## Registro da execução

- **Data/hora:** [23/11/2026 - 18:00]
- **Commit ou PR testado:** [REF-22 — Implementar cadastro por perfil e login local]
- **Navegador e sistema:** [Chrome - Windows 11]
- **Casos OK:** 14
- **Casos com falha:** 0
- **Casos bloqueados:** 0
- **Problemas abertos no Jira:** Nenhum
- **Resultado geral:** APROVADO

## Conclusão

No cenário apresentado, os 14 casos de teste foram executados com sucesso, sem falhas ou bloqueios.

Os fluxos de cadastro, login demonstrativo, persistência e encerramento da sessão, validações dos formulários e navegação pública atenderam aos resultados esperados.

A funcionalidade está aprovada para o escopo demonstrativo da Sprint 2, sem autenticação real no servidor.