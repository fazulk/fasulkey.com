FROM node:lts-alpine

WORKDIR /server

COPY ./  /server

RUN yarn

EXPOSE 3000

CMD [ "yarn", "start" ]
