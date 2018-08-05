# src: https://github.com/karllhughes/node-docker-demo/blob/master/Dockerfile

# Specifies the base image we're extending
FROM node:9

# Create base directory
RUN mkdir /app

# Specify the "working directory" for the rest of the Dockerfile
WORKDIR /app

# Install packages using NPM 5 (bundled with the node:9 image)
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
RUN yarn

# Add application code
COPY ./src /app/src
COPY ./ormconfig.json /app/ormconfig.json
COPY ./tsconfig.json /app/tsconfig.json

# Set environment to "development" by default
ENV NODE_ENV development

# Allows port 4001 to be publicly available
EXPOSE 4001

# The command uses nodemon to run the application
CMD ["ts-node-dev src/index.ts"]
