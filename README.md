# Hexa Portfolio

Personal portfolio built with React, TypeScript, Redux Toolkit, and Tailwind CSS. Hosted on GitHub Pages at [gitcheckoutnathan.com](https://gitcheckoutnathan.com).

## Run locally

Requires Node.js and npm. The current start script uses Windows syntax.

```powershell
npm ci
npm start
```

Open http://localhost:3001. Edit app code in `src/` and static assets in `public/`.

## Build and deploy

Push changes to `master` to deploy automatically. [The workflow](.github/workflows/deploy.yml) installs dependencies with `npm ci`, runs `npm run build`, and deploys `build/` directly to GitHub Pages. Check the repository's **Actions** tab for progress or use **Run workflow** to redeploy manually.

**One-time setup:** In GitHub **Settings > Pages > Build and deployment**, set **Source** to **GitHub Actions**. Keep the custom domain set to `www.gitcheckoutnathan.com` and its existing DNS records. No extra secrets are needed; the workflow uses GitHub's built-in token.

Run `npm run build` locally to check the production build. The generated `build/` folder is ignored by Git. The older `npm run deploy` command publishes to the `gh-pages` branch and is no longer needed for automatic deployments.

`public/CNAME` is copied into the build, but Actions deployments use the custom domain configured in GitHub Pages settings.
