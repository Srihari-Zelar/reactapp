FROM        ubuntu
RUN         apt-get update
RUN         mkdir /alpine
WORKDIR     /alpine
COPY        package.json /alpine
COPY        . /alpine
RUN         apt install npm -y
RUN         npm start