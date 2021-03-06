# Using Node:10 Image Since it contains all 
# the necessary build tools required for dependencies with native build (node-gyp, python, gcc, g++, make)
# First Stage : to install and build dependences

#FROM node:13 AS builder
#WORKDIR /app
#COPY ./package.json ./
#RUN npm install
#COPY . .
#RUN npm run build


# Second Stage : Setup command to run your app using lightweight node image
#FROM node:13
#WORKDIR /app
#COPY --from=builder /app ./
#EXPOSE 3000
#CMD ["npm", "run", "start:dev"]

FROM node:13-alpine
WORKDIR /app
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install
ADD . /app
EXPOSE 3000
CMD ["npm", "run", "start"]
