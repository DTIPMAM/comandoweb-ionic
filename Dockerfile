FROM node:18.16-buster-slim

RUN npm install -g npm@latest

RUN npm install -g @angular/cli

USER node

EXPOSE 4200