FROM        node:alpine as build-step
RUN         mkdir /alpine
WORKDIR     /alpine
COPY        package.json /alpine
RUN         npm install
COPY        ../.. /alpine
RUN         npm run build