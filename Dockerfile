FROM node:25-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.29.5-alpine AS runner

WORKDIR /app

COPY --from=builder --chown=nginx:nginx /app/out /var/www/out
