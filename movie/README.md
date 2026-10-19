# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## TMDB API key

Create a `.env.local` file in the project root and set `VITE_TMDB_API_KEY` to your TMDB API key. You can start from `.env.example`. Vite loads this file when running the app locally; do not commit `.env.local`.

Run `npm install` to install dependencies, then `npm run dev` to start the app.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on build and dev performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.org) in your project.
