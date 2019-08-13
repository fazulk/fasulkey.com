FROM node:10

WORKDIR /app

COPY ./server /app

RUN yarn

EXPOSE 3030

CMD [ "yarn", "start" ]
