# Frontend - Freelancer Project Manager

Angular SPA with lazy-loaded modules, dashboard UI, JWT auth flow, and project CRUD integration.

## Run

```bash
npm install
npm start
```

App runs on `http://localhost:4200`.

## Build

```bash
npm run build
```

## App Architecture

- `src/app/core` → layout, guards, interceptors, services
- `src/app/shared` → reusable directive, pipe, and shared module
- `src/app/features/auth` → template-driven auth form
- `src/app/features/dashboard` → responsive dashboard view
- `src/app/features/projects` → reactive form + CRUD views

## Implemented Angular Requirements

- SPA with Angular Router + lazy loading
- Dependency Injection via services
- `HttpClient` API integration
- RxJS Observables for async flows
- Template-driven forms (auth)
- Reactive forms + custom validation (projects)
- Custom directive (`appStatusGlow`)
- Custom pipe (`statusLabel`)
