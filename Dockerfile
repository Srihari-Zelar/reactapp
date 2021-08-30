FROM        node:alpine as build-step
RUN         mkdir /alpine
WORKDIR     /alpine
COPY        package.json /alpine
RUN         install npm -y
COPY        . /alpine
RUN         npm start