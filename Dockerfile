FROM node:10.16.3 AS build-env

WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/
RUN npm install --production
COPY . /app
CMD ["index.js"]

