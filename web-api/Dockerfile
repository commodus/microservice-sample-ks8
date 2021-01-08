FROM node:alpine
WORKDIR /usr/share
RUN mkdir webapi
WORKDIR /webapi
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4001
CMD [ "npm","run", "build"]
