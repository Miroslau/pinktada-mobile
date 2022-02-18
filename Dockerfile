FROM node:14.18.0
RUN mkdir -p /app
RUN apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/ && \
    rm -rf /var/cache/oracle-jdk8-installer;

ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
CMD ["npm", "run", "start"]
