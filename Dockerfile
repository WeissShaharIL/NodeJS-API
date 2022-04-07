FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/srv/app

COPY package.json /usr/srv/app

RUN npm install

COPY . /usr/srv/app

EXPOSE 3000

CMD [ "npm", "start"]