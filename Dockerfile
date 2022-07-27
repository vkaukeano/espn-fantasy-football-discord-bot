FROM node:16
RUN npm install -location=global yarn --force
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock .
RUN yarn 
COPY . .
EXPOSE 8000
CMD ["/bin/bash", "entrypoint/entrypoint.sh"]