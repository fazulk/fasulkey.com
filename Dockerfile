FROM node:10

# Create app directory
WORKDIR /app

COPY . ./app 

WORKDIR /app/react_ui
RUN yarn
RUN yarn build

WORKDIR /app/server
RUN yarn

EXPOSE 3030
CMD [ "yarn", "start" ]
