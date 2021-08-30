FROM        node:alpine as build-step
RUN         apt update -y
RUN         mkdir /alpine
WORKDIR     /alpine
COPY        package.json /alpine
RUN         apt install npm -y
COPY        . /alpine
RUN         npm start