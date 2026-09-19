# Deploying DDOmics Lab to GitHub Pages

1. Create or use the GitHub repository named `ddomics_lab_website` under the intended account.
2. Commit this repository and push the `main` branch.
3. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the source.
4. The included `.github/workflows/deploy.yml` installs from the lockfile, builds the Vite app and publishes `dist` whenever `main` is pushed.

The Vite base path is intentionally set to `/ddomics_lab_website/`, matching a project Pages URL such as `https://axiomyr.github.io/ddomics_lab_website/`. If the repository name changes, update the same path in all three places:

- `vite.config.ts`
- the `basePath` constant in `index.html`
- the `basePath` constant in `public/404.html`

The `404.html` fallback preserves direct links to pages such as `/people` and `/research/ihmi` on GitHub Pages.
