# Dr. Agenda SaaS

## Project

- [Figma](https://www.figma.com/design/eVnp1AIXMni6ZGqe94blIp/dr.agenda?node-id=356-126&p=f&t=uiUSFSTIvjU6vNuc-0)

Create the project

```sh
npx create-next-app@15.3.2
```

```sh
✔ What is your project named? … .
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
```

Install the dependencies:

```sh
# ESLint + Prettier
npm i -D prettier prettier-plugin-tailwindcss
npm i -D eslint-plugin-simple-import-sort
# Biome
npm i @biomejs/biome -D

# Drizzle
npm i drizzle-orm pg
npm i -D drizzle-kit @types/pg
npm i dotenv

# General
npm i zod
npm i sonner
npm i better-auth
```

Generate the Database:
```sh
npx drizzle-kit push
```

Open the Database:
```sh
npx drizzle-kit studio
```

Install Shadcn:
```sh
npx shadcn@latest init

npx shadcn@latest add button
npx shadcn@latest add tabs
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add form

```

## Roteiro Aula 01: Setup do Projeto

- [x] Inicialização do projeto Next.js
- [x] Configuração de ferramentas (ESlint, Prettier, Tailwind)
- [x] Configuração do Drizzle e banco de dados
- [x] Configuração do shadcn/ui

## Roteiro Aula 02: Autenticação e Configurações do Estabelecimento

- [x] Tela de login e criação de conta
- [ ] Login com e-mail e senha
- [ ] Login com o Google
- [ ] Fundamentos do Next.js (Rotas, Páginas, Layouts)
- [ ] Criação de clínica

## Technologies

- [Next.js](https://nextjs.org)

## Tools

- IDE: [Cursor](https://www.cursor.com/) - [VS Code](https://code.visualstudio.com) - [Windsurf](https://windsurf.com/editor)
- ORM: [Drizzle](https://orm.drizzle.team) - [Prisma](https://www.prisma.io)
- Database Host: [Neon](https://neon.tech/) - [Supabase](https://supabase.com) - [Vercel Postgres](https://vercel.com/docs/postgres) - [PlanetScale](https://planetscale.com)
- Diagrams: [Eraser](https://app.eraser.io/)
- Components: [Shadcn](https://ui.shadcn.com) - [Material UI](https://mui.com/material-ui/) - [Ant Design](https://ant.design)

## Extensions

- [Tailwind CSS IntelliSense](https://marketplace.cursorapi.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint](https://marketplace.cursorapi.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.cursorapi.com/items?itemName=esbenp.prettier-vscode)
- [Simple React Snippets](https://marketplace.cursorapi.com/items?itemName=burkeholland.simple-react-snippets)
- [poimandres](https://marketplace.cursorapi.com/items?itemName=pmndrs.pmndrs)
- [Symbols](https://marketplace.cursorapi.com/items?itemName=miguelsolorio.symbols)
- [Biome](https://marketplace.cursorapi.com/items?itemName=biomejs.biome)
- [OKLCH Color Preview](https://marketplace.cursorapi.com/items?itemName=nize.oklch-preview)

<!-- Senha: A______ -->