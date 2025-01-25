FROM node:18-alpine

# Instalar o MySQL Client
RUN apk update && apk add mysql-client

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY wait-for-it.sh /usr/bin/wait-for-it
RUN chmod +x /usr/bin/wait-for-it

RUN npm install

EXPOSE 3001

CMD ["wait-for-it", "db:3306", "--", "node", "src/index.js"]
