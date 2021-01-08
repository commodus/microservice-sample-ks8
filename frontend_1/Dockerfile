
FROM node:alpine as builder
WORKDIR /usr/share
RUN mkdir micro-frontend
WORKDIR /micro-frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# ------------------------------------------------------
# Production Build
# ------------------------------------------------------
FROM nginx:1.16.0-alpine
COPY --from=builder /micro-frontend/public /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


