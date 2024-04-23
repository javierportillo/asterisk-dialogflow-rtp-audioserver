FROM node:21-alpine

WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/
RUN npm install
COPY . /app
CMD ["index.js"]

