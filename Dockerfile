FROM node:10

# Create app directory
WORKDIR /server

COPY ./server /server

RUN yarn

EXPOSE 3030

CMD [ "yarn", "start" ]
