# Angular Portfolio SPA

Portfolio web application rebuilt as Angular-only SPA and aligned to the provided Figma structure:

- Hero
- About
- Skills
- Projects
- Contact
- Footer

No authentication, authorization, JWT, guards, or dashboard modules are used.

## Project Structure

- `frontend/client/` → Angular application

## Install

```bash
cd frontend/client
npm install
```

## Run

```bash
cd frontend/client
npm start
```

App URL: `http://localhost:4200`

## Build

```bash
cd frontend/client
npm run build
```

## Angular Architecture

- `src/app/core` → app-wide services and HTTP integration
- `src/app/shared` → shared module, custom directive, custom pipe
- `src/app/features/portfolio` → lazy-loaded portfolio feature module

## Angular Features Included

- SPA routing with lazy loading
- `HttpClient` + Observables (mock content loaded from `public/data/portfolio.json`)
- Template-driven contact form
- Reactive validation logic for contact form (custom validator included)
- Custom directive: `appHighlightCard`
- Custom pipe: `skillLevel`
- Responsive SCSS layout (no Bootstrap)
