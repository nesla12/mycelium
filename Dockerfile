# Static build of the Human-Core site, served by nginx. Behind Traefik on a
# VPS, or any container host. Build context must be the repo root, because the
# site reads the canonical documents from /content during the build.
#
#   docker build -t human-core-site .
#   docker run --rm -p 8080:80 human-core-site   # then open http://localhost:8080

# ---- Build stage --------------------------------------------------------------
FROM node:22-alpine AS build
WORKDIR /app/site

# Install dependencies first for better layer caching.
COPY site/package.json site/package-lock.json* ./
RUN npm ci

# Bring in the canonical content (source of truth) and the site source.
WORKDIR /app
COPY content ./content
COPY site ./site

# Build. Astro reads the documents directly from /app/content and produces the
# static site in /app/site/dist.
WORKDIR /app/site
RUN npm run build

# ---- Serve stage --------------------------------------------------------------
FROM nginx:alpine AS serve
COPY --from=build /app/site/dist /usr/share/nginx/html
COPY site/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -q -O /dev/null http://localhost/ || exit 1
