# Cypress 15.10.0 — WSC2026 app + e2e test

```bash
docker compose up --abort-on-container-exit --exit-code-from cypress
```

Starts a tiny web app (nginx) and runs the Cypress 15.10.0 e2e test against it (headless,
via the official `cypress/included` image). The run prints a passing result and exits.
