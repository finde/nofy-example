FROM node

WORKDIR /app

RUN mkdir -p node_modules/@finde

COPY package.json .

RUN yarn install

CMD ["yarn", "serve"]
