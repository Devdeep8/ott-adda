FROM node:22-alpine AS builder

RUN apk update
RUN apk add --no-cache git build-base gcc abuild make bash
RUN apk add --no-cache tini

RUN mkdir -p /home/node/app && chown node:node /home/node/app
USER node
WORKDIR /home/node/app

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
ENV DEBIAN_FRONTEND noninteractive

ARG PORT=8003
ENV PORT $PORT
EXPOSE $PORT 9229 9230

# Install deps first (cached layer)
COPY --chown=node:node ./package*.json ./
RUN npm install

# Source copied last
COPY --chown=node:node . .

# Generate Prisma Client with explicit schema path
RUN npx prisma generate --schema=./src/prisma/schema.prisma

ENTRYPOINT ["/sbin/tini", "--"]


# ─────────────────────────────────────────────────────────
FROM node:22-alpine AS production

RUN apk update
RUN apk add --no-cache make tini

RUN mkdir -p /home/node/app && chown node:node /home/node/app
USER node
WORKDIR /home/node/app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Copy production dependencies
COPY --from=builder /home/node/app/package*.json ./
COPY --from=builder /home/node/app/node_modules  ./node_modules/

# Copy source code and config
COPY --chown=node:node . .

ARG PORT=8003
ENV PORT $PORT
EXPOSE $PORT

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["npm", "run", "start"]
