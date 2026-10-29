# Agenda Posts

Plataforma de agendamento de posts para redes sociais, com aprovação do cliente.

- **Conta admin:** agenda, edita e gerencia posts e clientes.
- **Conta cliente:** visualiza o calendário dos seus posts e aprova ou solicita ajustes.

## Tecnologias

React + TypeScript + Vite, CSS puro, React Router, FullCalendar, React Hook Form + Zod, TanStack Query e json-server (API mock).

## Como rodar

```bash
npm install
npm run api   # API mock em http://localhost:3001
npm run dev   # app em http://localhost:5173
```

Rode `api` e `dev` em terminais separados.

## Estrutura

```
src/
  components/     Componentes usados em várias telas (Layout, Navbar)
  constants/      Regras fixas: redes sociais (formatos, limites) e status
  features/       Pedaços de cada funcionalidade
    auth/         Login: contexto, provider e hook useAuth
    calendario/   Cabeçalho, grade do mês, chips e painel de aprovação
    clientes/
    posts/
  pages/          Uma tela por rota (cada uma com seu .css ao lado)
  routes/         Configuração do router e rota protegida
  services/       Chamadas à API
  styles/         Estilos globais (paleta de cores)
  types/          Tipos TypeScript (Usuario, Cliente, Post…)
  index.css       Reset e estilos globais
  main.tsx        Ponto de entrada
```

**Convenções**

- O `.css` de um componente fica na mesma pasta que ele, com o mesmo nome.
- Classes CSS no padrão BEM em português: `bloco__elemento--modificador`.
- Cores só pelos tokens de `styles/cores.css` (nunca hex direto nos componentes).
