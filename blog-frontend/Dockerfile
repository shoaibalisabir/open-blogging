FROM node:20.12.1

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .


EXPOSE 3000

CMD [ "npm", "start" ]