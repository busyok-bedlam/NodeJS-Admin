FROM node:10

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm i -g nodemon

EXPOSE 3000
COPY . .
