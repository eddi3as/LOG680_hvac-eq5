FROM node:18
WORKDIR /usr/src/app
COPY . .
EXPOSE 8080
CMD [ "node", "dist/index.js" ]