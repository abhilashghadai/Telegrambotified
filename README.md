# Telegrambotified

A separate sandbox project to test Telegram authentication, authorized media retrieval, and deployment workflows without touching FinancialOS.

## Initial scope

1. Validate the repository and deployment pipeline.
2. Build a small web interface for Telegram Login using Telegram's supported authentication flow.
3. Keep credentials in environment variables; never commit tokens, API hashes, session strings, or `.env` files.
4. Use persistent storage for any authorized media archive. Vercel can host the web UI and request/response endpoints, but it is not an always-on worker or durable file store.
5. Only archive content that you own or are authorized to access and save; do not bypass protected-content restrictions.

## Planned stack

- Next.js web interface
- Telegram Login with server-side verification (credentials and callback configuration required)
- Vercel for the web application
- Separate persistent worker/storage if ongoing downloads are needed

## Current status

Repository initialized for the smoke-test implementation. Authentication is not configured yet; no secrets should be committed.
