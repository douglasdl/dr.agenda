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
npm i dayjs
npm i next-safe-action zod
npm i react-number-format
npm i @tanstack/react-table
```

Generate the Database:
```sh
npx drizzle-kit push
```

Open the Database:
```sh
npx drizzle-kit studio
```

Generate database to authentication:
```sh
npx @better-auth/cli generate
```

Migrate database to authentication:
```sh
npx @better-auth/cli migrate
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
npx shadcn@latest add sonner
npx shadcn@latest add dialog
npx shadcn@latest add sidebar
npx shadcn@latest add avatar
npx shadcn@latest add dropdown-menu
npx shadcn@latest add alert-dialog
npx shadcn@latest add select
npx shadcn@latest add badge
npx shadcn@latest add table
npx shadcn@latest add alert-dialog
npx shadcn@latest add calendar
```

## Roteiro Aula 01: Setup do Projeto

- [x] Inicialização do projeto Next.js
- [x] Configuração de ferramentas (ESlint, Prettier, Tailwind)
- [x] Configuração do Drizzle e banco de dados
- [x] Configuração do shadcn/ui

## Roteiro Aula 02: Autenticação e Configurações do Estabelecimento

- [x] Tela de login e criação de conta
- [x] Login com e-mail e senha
- [x] Login com o Google
- [x] Fundamentos do Next.js (Rotas, Páginas, Layouts)
- [x] Criação de clínica

## Roteiro Aula 03: Gerenciamento de Profissionais e Disponibilidade

- [x] Sidebar e Route Groups
- [x] Página de médicos
- [x] Criação de médicos & NextSafeAction
- [x] Listagem de médicos
- [x] Atualização de médicos
- [x] Deleção de médicos

## Roteiro Aula 04: Gerenciamento de Pacientes e Agendamentos

- [x] Criação de pacientes
- [x] Edição de pacientes
- [x] Listagem de pacientes
- [x] Deleção de pacientes
- [ ] Criação de agendamentos
- [ ] Listagem de agendamentos
- [ ] Deleção de agendamentos

---

## Technologies

- [Next.js](https://nextjs.org)

## Tools

- IDE: [Cursor](https://www.cursor.com/) - [VS Code](https://code.visualstudio.com) - [Windsurf](https://windsurf.com/editor)
- ORM: [Drizzle](https://orm.drizzle.team) - [Prisma](https://www.prisma.io)
- Database Host: [Neon](https://neon.tech/) - [Supabase](https://supabase.com) - [Vercel Postgres](https://vercel.com/docs/postgres) - [PlanetScale](https://planetscale.com)
- Diagrams: [Eraser](https://app.eraser.io/)
- Components: [Shadcn](https://ui.shadcn.com) - [Material UI](https://mui.com/material-ui/) - [Ant Design](https://ant.design)
- Authentication: [Better Auth](https://www.better-auth.com) - [Auth.js](https://authjs.dev) - [Clerk](https://clerk.com)
- [Day.js](https://day.js.org)
- [Next Safe Action](https://next-safe-action.dev)
- [React Number Format](https://s-yadav.github.io/react-number-format/docs/intro/)
- [Tanstack Table](https://tanstack.com/table/latest/docs/installation)

## Extensions

- [Tailwind CSS IntelliSense](https://marketplace.cursorapi.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint](https://marketplace.cursorapi.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.cursorapi.com/items?itemName=esbenp.prettier-vscode)
- [Simple React Snippets](https://marketplace.cursorapi.com/items?itemName=burkeholland.simple-react-snippets)
- [poimandres](https://marketplace.cursorapi.com/items?itemName=pmndrs.pmndrs)
- [Symbols](https://marketplace.cursorapi.com/items?itemName=miguelsolorio.symbols)
- [Biome](https://marketplace.cursorapi.com/items?itemName=biomejs.biome)
- [OKLCH Color Preview](https://marketplace.cursorapi.com/items?itemName=nize.oklch-preview)


## Auth

- [Google Cloud Platform](https://console.cloud.google.com/welcome)

<!-- Senha: A7X____ -->

## Agent Prompts:

```mdc
crie uma página de paciantes. Essa página deve ter o botão de 'Adicionar paciente'. Esse botão abrirá um dialog com um formulário de upsert.

Esse formulário terá os seguintes compos:
- Nome do paciente
- E-mail
- Número de telefone (com máscara)
- Sexo: select com duas opções, "Masculino" e "Feminino"

Crie um componente "AddPatientButton" que renderizará o componente "UpsertPatientForm".

Ao enviar o formulário, chame uma nova server action que vai fazer upsert do paciente no bando de dados.

```