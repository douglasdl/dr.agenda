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

```

## Technologies

- [Next.js](https://nextjs.org)

## Tools

- IDE: [Cursor](https://www.cursor.com/) - [VS Code](https://code.visualstudio.com) - [Windsurf](https://windsurf.com/editor)
- ORM: [Drizzle](https://orm.drizzle.team) - [Prisma](https://www.prisma.io)
- Database Host: [Neon](https://neon.tech/) - [Supabase](https://supabase.com) - [Vercel Postgres](https://vercel.com/docs/postgres) - [PlanetScale](https://planetscale.com)

## Extensions

- [Tailwind CSS IntelliSense](https://marketplace.cursorapi.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint](https://marketplace.cursorapi.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.cursorapi.com/items?itemName=esbenp.prettier-vscode)
- [Simple React Snippets](https://marketplace.cursorapi.com/items?itemName=burkeholland.simple-react-snippets)
- [poimandres](https://marketplace.cursorapi.com/items?itemName=pmndrs.pmndrs)
- [Symbols](https://marketplace.cursorapi.com/items?itemName=miguelsolorio.symbols)
- [Biome](https://marketplace.cursorapi.com/items?itemName=biomejs.biome)
