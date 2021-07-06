# --- install/build ---
FROM node:12-alpine as base

COPY package.json /app/

WORKDIR /app

RUN npm install --production --ignore-scripts

COPY ["*.config.js",".browserslistrc", "/app/"]
COPY __test__ /app/__test__
COPY public /app/public
COPY src /app/src

RUN npm run build
# ---- prod ----

FROM pierrezemb/gostatic
COPY --from=base /app/dist /srv/http
COPY headers.json /headers.json
ENTRYPOINT ["/goStatic", "-port", "8080", "-header-config-path", "/headers.json", "-append-header", "cache-control:no-store", "-fallback", "index.html" ]
