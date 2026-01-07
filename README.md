# HashPet GitHub Pages site

This folder is designed to be published via **GitHub Pages** (recommended source: `main` branch → `/docs`).

## Configure
Update placeholders in:
- `docs/assets/config.js`
  - `feedbackFormUrl` (your Google Form URL)
  - `githubRepoUrl`

## Publish on GitHub Pages
1. In GitHub: **Settings → Pages**
2. **Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/docs`
3. Save. Your site will be available at:
   - `https://<YOUR_GITHUB_USERNAME>.github.io/<REPO_NAME>/`

## Point the extension at the site
After Pages is live, set `homepage_url` in `extension/public/manifest.json` to your Pages base URL (then rebuild).
