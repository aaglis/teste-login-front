# Frontend — React + Vite + TypeScript

Login/cadastro + dashboard protegida. Conecta na API pela URL em `VITE_API_URL`.
Usa o client do [better-auth](https://better-auth.com) (`better-auth/react`).

## Stack
- React 18 + Vite + TypeScript
- react-router-dom
- better-auth (client)
- pnpm

## Setup
```bash
cp .env.example .env   # ajuste VITE_API_URL
pnpm install
pnpm dev               # http://localhost:5173
```

## Variáveis de ambiente
| Var | Descrição |
|-----|-----------|
| `VITE_API_URL` | URL completa do backend (ex: http://localhost:3000) |

> Vite injeta `VITE_*` em build time. No Docker, passe via `--build-arg`.

## Rotas
- `/login` — entrar
- `/register` — cadastrar
- `/dashboard` — protegida (redireciona p/ `/login` se sem sessão)

## Docker
```bash
docker build -t teste-login-frontend \
  --build-arg VITE_API_URL=http://localhost:3000 .
docker run -p 5173:80 teste-login-frontend
```
