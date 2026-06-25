# Nalyy Labs

Static Nalyy Labs mini-games hub.

## Deploy on Vercel

- Framework preset: Other
- Build command: leave empty
- Output directory: leave empty

Vercel can serve the site directly from the repository root.

## Shared leaderboard

The leaderboard uses the Vercel function at `/api/scores`.

Add this environment variable in Vercel:

- `GITHUB_TOKEN`: a fine-grained GitHub token with read/write Contents access to this repository.

Optional overrides:

- `GITHUB_OWNER`: `ilanjue201293-stack`
- `GITHUB_REPO`: `Nalyy-Labs`
- `GITHUB_BRANCH`: `main`
- `SCORES_FILE_PATH`: `data/scores.json`
