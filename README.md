# Home — Sistemas Jeff Vianna

Página única que reúne todos os deploys em produção (Guia, CMS, Copa, SARESP, PP B1, Financeiro). Cards em grade, abrem em nova aba.

## Stack

React 19 + Vite + TypeScript. CSS do design-system inlinado em `src/design-system.css` — sem dependência de pacote privado, sem GITHUB_TOKEN no deploy.

## Editar a lista

Tudo vive em [`src/cards.ts`](src/cards.ts). Adicionar/remover sistema = editar 1 array.

## Atualizar tokens do design-system

Quando o pacote `@jeffersonvianna-dev/design-system` ganhar nova versão e quisermos os tokens atualizados aqui:
```bash
cp ../design-system-repo/dist/styles.css src/design-system.css
```

## Rodar local

```bash
npm install
npm run dev      # http://localhost:5173
```

## Deploy (Vercel)

1. `gh repo create jeffersonvianna-dev/home --public --source=. --push`
2. Importar o repo na Vercel — sem env vars necessárias.
3. Push para `main` → deploy automático.
