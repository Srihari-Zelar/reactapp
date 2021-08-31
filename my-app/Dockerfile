FROM        ubuntu
RUN         apt-get update
RUN         mkdir /alpine
WORKDIR     /alpine
COPY        package.json /alpine
COPY        . /alpine
RUN         npm install
RUN         npm start