# Cypress 15.10.0 — WSC2026

A tiny web app (served by nginx) plus a **Cypress 15.10.0** end-to-end test (WorldSkills 2026
Web Technologies, TP17). Running it executes the test headless against the app using the official
`cypress/included` image.

## Run it

```bash
docker compose up --build --abort-on-container-exit --exit-code-from cypress
```

This starts the `web` service, runs the test (`All specs passed!`), and exits with Cypress's
status code. Stop leftover containers with `docker compose down`.

## Develop

- Edit the app under test in **`public/index.html`**.
- Edit the test in **`cypress/e2e/app.cy.js`** (config in `cypress.config.js`).

Re-run the command above to execute the suite again. The base URL of the app is `http://web`
(the nginx service) as set via `CYPRESS_baseUrl` in `docker-compose.yml`.

To open the interactive Cypress runner you need **Node 24.1.0** locally, then
`npx cypress open` against a locally served copy of `public/`.

## Stack

- App: static HTML served by nginx
- Cypress 15.10.0 (official `cypress/included` image, headless Chromium)
