FROM node:14-alpine


WORKDIR /app

COPY ./package*.json /app/

RUN npm install --production

COPY src /app/src

FROM node:14-alpine
WORKDIR /app/
COPY --from=0 /app .

CMD npm start
EXPOSE 3000
