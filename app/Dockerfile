FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/srv/app

COPY package.json /usr/srv/app

RUN npm install

COPY . /usr/srv/app

EXPOSE 8080

CMD [ "npm", "start"]