# TypeScript Starter

**Update:** A `pnpm-lock.yaml` file was added to the root of the project. If possible use `pnpm` over `npm`. You might like it better. See [the docs 📝](https://pnpm.io/motivation) if interested. If not, delete this file.

Uses `"strict"` settings, includes `eslint`, `prettier`, the each and everything.

1. `npm run tsc` for `tsc -w`
2. In separate terminal window, `npm start` to have `nodemon` watch the built files. Runs with `node --experimental`.
3. If desired, in another terminal window, `npm test` to run `jest --watch`

## 🎶

Add: `"new-cap": ["error", { capIsNewExceptions: "Router" }],` to `.eslintrc.cjs` to avoid issue when doing with TS/ESLint when doing: `const router = Router()` (or similar).

This includes opinions, especially in `.vscode/settings.json`. If you are beginner, especially, I am urge you to give them a solid try before making changes. And, feel free to give me some feedback on this too!
