# Atoma Engineering — Marketing Site

Multi-tier company site for **Atoma Engineering** (Agentic Engineering Lab).

**Stack:** Vite · React 19 · TypeScript · Framer Motion · Zustand · React Router  
**Design:** Obsidian Glass (Linear-precision dark, 1px hairlines)  
**Deploy:** Cloudflare Pages

## Tiers

| Tier | Routes | Purpose |
|------|--------|---------|
| 1 Marketing | `/` `/architecture` `/runtime` `/topology` `/compliance` `/docs` `/enterprise` | Public site + product narrative |
| 2 Auth / Demo | `/login` `/demo` | Gate + interactive sandbox |
| 3 Lab | `/lab` | Engineering Lab shell (full IDE later) |

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Connect Git.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Framework preset: Vite (optional)

Or CLI:

```bash
npx wrangler pages deploy dist --project-name=atoma-engineering
```

`public/_redirects` provides SPA fallback (`/* → /index.html 200`).

## Brand

- **Void** `#08090a` · **Carbon** `#0f1011` · **Indigo** `#5e6ad2`
- Type: Inter (cv01/ss03) + JetBrains Mono
- Mark: triangle A with indigo nucleus

## License

Private — Atoma Engineering.
