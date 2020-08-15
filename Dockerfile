FROM node:12

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . .
RUN npm run build
RUN npm run postinstall
RUN yarn global add serve

EXPOSE 5000
CMD ["serve", "-s", "build"]