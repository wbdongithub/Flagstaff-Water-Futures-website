# Publishing the Website

## Review it on your computer

1. Install Node.js 20 or newer.
2. Double-click `START-WINDOWS.bat`.
3. After installation, the site normally opens at `http://localhost:3000`.

## GitHub Pages

1. Create an empty GitHub repository.
2. Copy all project files into it and push to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Edit `docusaurus.config.js` before public deployment:
   - Set `url` to the final site domain.
   - For a project site, set `baseUrl` to `/<repository-name>/`.
   - Set `organizationName` and `projectName` to the GitHub values.
6. Push the changes. The included workflow builds and publishes the site.

## Cloudflare Pages

Connect the GitHub repository in Cloudflare Pages and use:

- Build command: `npm run build`
- Build output directory: `build`
- Node version: 22

For a custom domain, set `url` to that domain and normally keep `baseUrl: '/'`.
