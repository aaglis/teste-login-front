FROM node:20-alpine
WORKDIR /app
RUN corepack enable

# VITE_API_URL is baked at build time (Vite inlines env vars).
ARG VITE_API_URL=http://localhost:3333
ENV VITE_API_URL=$VITE_API_URL

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile || pnpm install

COPY . .
RUN pnpm build

EXPOSE 5173
# Serve the production build with vite preview on 5173.
CMD ["pnpm", "preview", "--host", "--port", "5173"]
