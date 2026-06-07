# Deploying the Human-Core site

The site is a static build. Two paths are given below. **Vercel stands up the fastest, so it is the default recommendation.** The VPS path is for self-hosting behind your own Traefik.

The site lives in the `site/` subdirectory and reads the canonical documents from `content/` at build time, producing the static output in `site/dist`.

---

## Option A. Vercel (recommended, fastest)

Deploy from the **repository root**, not from `site/`. The site reads the
canonical documents from `/content` at build time, so the whole repo must be in
the build. The root `vercel.json` handles this: it installs and builds inside
`site/` and serves `site/dist`.

**With the dashboard (import the Git repo):**

1. New Project, import this repository.
2. Leave **Root Directory** as the repository root (do not set it to `site`).
3. The build settings come from `vercel.json` (install `npm --prefix site install`, build `npm --prefix site run build`, output `site/dist`). Deploy.
4. Production builds run on every push to the default branch; pull requests get preview URLs.

**With the CLI (from the repo root):**

```bash
npm i -g vercel
vercel login          # one-time, interactive
vercel --prod --yes   # build and promote to production
```

No environment variables are required. To use a custom domain, add it under
Project, Settings, Domains, and update `site` in `site/astro.config.mjs` to the
production URL so canonical links are correct.

---

## Option B. Your own VPS, behind Traefik

A multi-stage `Dockerfile` builds the static site and serves it with nginx. A `docker-compose.yml` wires it to Traefik.

**Prerequisites on the VPS:**

- Docker and the Compose plugin.
- A running Traefik instance attached to an external Docker network named `traefik`, with a `websecure` (443) entrypoint and an ACME certresolver named `letsencrypt`. If yours differ, edit the labels in `docker-compose.yml`.
- A DNS A/AAAA record pointing your domain at the VPS.

**Steps:**

1. Edit `docker-compose.yml` and replace `humancore.example.org` with your domain (in both router rules).
2. From the repo root:

   ```bash
   docker compose up -d --build
   ```

3. Traefik issues the certificate and routes the domain to the container on port 80. Check logs with `docker compose logs -f`.

**Without Traefik (quick local or bare test):**

```bash
docker build -t human-core-site .
docker run --rm -p 8080:80 human-core-site
# open http://localhost:8080
```

To update after changing content or code: `git pull` then `docker compose up -d --build`.

---

## Notes

- The build is fully static. There is no server runtime, no database, and no secrets.
- The site reads the documents directly from `/content`; each rendered page can be printed or saved to PDF from the browser. The site does not serve raw Markdown files.
- If you change the production domain, update `site` in `site/astro.config.mjs` so canonical URLs match.
