FROM        node:alpine as build-step
RUN         mkdir /alpine
WORKDIR     /alpine
COPY        package.json /alpine
COPY        . /alpine
RUN         npm install
RUN         npm start