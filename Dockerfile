FROM node:lts-alpine
ENV NODE_ENV=production
ENV REACT_APP_PORT=${REACT_APP_PORT}
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE ${REACT_APP_PORT}
RUN chown -R node /app
USER node
CMD ["npm", "start"]