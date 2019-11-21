# build
FROM node:lts-alpine

WORKDIR /ui

COPY ./package.json /ui

RUN yarn

COPY ./ /ui

RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]
