FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=${port}

EXPOSE ${port}

CMD ["npm", "run", "prod"]
