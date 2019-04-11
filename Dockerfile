FROM node:10

# Create app directory
WORKDIR /react_ui

COPY ./react_ui /react_ui

RUN yarn

RUN yarn build

WORKDIR /server

COPY ./server /server

RUN yarn

EXPOSE 3030

CMD [ "yarn", "start" ]
