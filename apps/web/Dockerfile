FROM node:22-alpine AS base

# builder
FROM base AS builder
WORKDIR /app

RUN npm install -g pnpm@10.32.1

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json .npmrc ./
COPY apps/web/package.json ./apps/web/
COPY packages/ ./packages/

RUN pnpm install --frozen-lockfile

COPY apps/web/ ./apps/web/

ENV NODE_ENV=production

RUN pnpm build --filter=@repo/web

# runner
FROM base AS runner
WORKDIR /app

COPY --from=builder /app/apps/web/.next/standalone .
COPY --from=builder /app/apps/web/public ./apps/web/public
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static

EXPOSE 3000

CMD [ "node", "apps/web/server.js" ]