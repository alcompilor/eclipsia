FROM node:22-alpine3.18

WORKDIR /app

COPY . /app/

RUN npm install

EXPOSE 7185

CMD [ "npm", "start" ]