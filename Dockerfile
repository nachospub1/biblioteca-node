FROM node:16.3.0-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5432

EXPOSE 3000

CMD npm run seed:up

CMD ["npm","start"]