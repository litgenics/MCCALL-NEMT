# Deploy to GitHub Pages

## Live URL

**https://litgenics.github.io/MCCALL-NEMT/**

## One-time setup

### 1. Enable GitHub Pages

1. Open **https://github.com/litgenics/MCCALL-NEMT/settings/pages**
2. Under **Build and deployment** → **Source**: select **Deploy from a branch**
3. Branch: **main**, folder: **/docs**
4. Save

### 2. Deploy

Pushes to `main` run the GitHub Action automatically. To deploy manually:

1. Go to **https://github.com/litgenics/MCCALL-NEMT/actions**
2. Run **Deploy to GitHub Pages** → **Run workflow**

Wait ~2 minutes for the site to update.

## Local development

```powershell
npm run dev
```

Local dev runs without the `/MCCALL-NEMT` base path. Production build uses it automatically via GitHub Actions.