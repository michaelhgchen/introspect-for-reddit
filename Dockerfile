FROM node:10

# all following actions should be taken from this directory in image filesystem
WORKDIR /usr/src/app

# copy package.json from host to present location in image
# e.g. /usr/src/app/package.json
#
# Docker creates layers for each COPY/ADD. If it detects a change at build time
# it will rebuild all layers below. Source code will change a lot though
# not necessarily dependencies, so we don't want to re-run npm install
COPY package.json .
RUN npm install

# copy source files from host to present location in image
COPY . .

RUN npm run build
CMD [ "npm", "start" ]
