# ui-shell

An Angular v20 UI shell: a small top header with a hamburger button (top-left) that toggles a
left side menu, plus a theme selector and domain name (top-right). Built with Angular Material
(standalone components, M3 theming).

## Development

Requires Node 20.19+ or 22.12+.

```bash
npm install
npm start        # ng serve -> http://localhost:4200
npm run build    # production build -> dist/ui-shell/browser
```

## Structure

- `src/app/app.component.*` — shell layout (`mat-sidenav` drawer + content)
- `src/app/header/*` — top header (hamburger, theme selector, domain)
- `src/app/side-nav/*` — left menu; edit `side-nav/menu.config.ts` to change items
- `src/app/theme.service.ts` — light/dark toggle, persisted to `localStorage`
- `src/app/pages/*` — placeholder routed pages
- `src/environment.ts` — `DOMAIN` shown in the header

## Docker

Multi-stage build (Node → nginx), served on port **8080** internally.

```bash
docker build -t ui-shell .
docker run -p 8081:8080 ui-shell   # http://localhost:8081
```

## Deployment

`.github/workflows/build-deploy.yml` builds a `linux/arm64` image, pushes it to GHCR, and deploys
to a target host via `docker-compose.yml` (contract: `APP_NAME`, `IMAGE`, `HOST_PORT` → `8080`).
