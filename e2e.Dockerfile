FROM node:18.16.1-alpine

RUN apk add --no-cache bash
RUN npm i -g @nestjs/cli typescript ts-node

COPY package*.json /tmp/app/
RUN cd /tmp/app && npm install

COPY . /usr/src/app
RUN cp -a /tmp/app/node_modules /usr/src/app

# Copy and set execute permissions for wait.sh
COPY wait.sh /opt/wait.sh
RUN chmod +x /opt/wait.sh
RUN sed -i 's/\r//g' /opt/wait.sh

# Copy and set execute permissions for startup.ci.sh
COPY ./startup.ci.sh /opt/startup.ci.sh
RUN chmod +x /opt/startup.ci.sh
RUN sed -i 's/\r//g' /opt/startup.ci.sh

WORKDIR /usr/src/app
RUN cp env-example .env
RUN npm run build

CMD ["bash", "/opt/startup.ci.sh"]
