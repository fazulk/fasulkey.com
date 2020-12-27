# --- install/build ---
FROM node:12-alpine as base

COPY package.json /app/

WORKDIR /app

RUN npm install --production --ignore-scripts

COPY ["*.config.js",".browserslistrc", "/app/"]
COPY public /app/public
COPY src /app/src

RUN npm run build
# ---- prod ----
FROM nginx:alpine

RUN echo $'server { \n\
    listen 8080;\n\
    root /usr/share/nginx/html;\n\
    gzip on;\n\
    gzip_types text/css application/javascript application/json image/svg+xml;\n\
    gzip_comp_level 4;\n\
    location / {\n\
    try_files $uri /index.html;\n\
    add_header Cache-Control max-age=31536000;\n\
    add_header Cache-Control private;\n\
    }\n\
    location /index.html {\n\
    add_header Cache-Control no-store;\n\
    }\n\
    }\n\
    '>> /etc/nginx/conf.d/default.conf

COPY --from=base /app/dist /usr/share/nginx/html
