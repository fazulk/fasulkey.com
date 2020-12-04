FROM node:14-alpine

# Create app directory
WORKDIR /app

COPY ./package*.json /app/

RUN npm install --production

# Bundle app source
COPY src /app/src

FROM node:14-alpine
WORKDIR /app/
COPY --from=0 /app .
CMD npm start
