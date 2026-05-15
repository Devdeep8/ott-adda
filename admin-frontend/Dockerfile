# syntax=docker/dockerfile:1

ARG NODE_VERSION=20

# ── Base ─────────────────────────────────────────
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app

# ── Install deps ─────────────────────────────────
FROM base AS deps

COPY package.json package-lock.json ./

RUN npm ci


# ── Build ────────────────────────────────────────
FROM base AS build

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules

# copy env FIRST so Next.js sees it
COPY .env .env

# copy rest of project
COPY . .

RUN npm run build


# ── Final runtime ────────────────────────────────
FROM node:${NODE_VERSION}-alpine AS final

ENV NODE_ENV=production
ENV PORT=4001
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app
USER node

COPY --chown=node:node --from=build /app/.next/standalone ./
COPY --chown=node:node --from=build /app/.next/static ./.next/static
COPY --chown=node:node --from=build /app/public ./public

CMD ["node", "server.js"]