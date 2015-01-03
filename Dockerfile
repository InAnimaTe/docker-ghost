FROM dockerfile/nodejs
MAINTAINER Yosh de Vos "yosh@elzorro.nl"

# Install Ghost
RUN \
  cd /tmp && \
  wget https://ghost.org/zip/ghost-latest.zip && \
  unzip ghost-latest.zip -d /ghost && \
  rm -f ghost-latest.zip && \
  cd /ghost && \
  npm install --production && \
  useradd ghost --home /ghost

# Add config file
ADD config.js /ghost/config.js

# Set environment variables.
ENV NODE_ENV  production
ENV URL	      http://localhost:2368/

# Define working directory.
WORKDIR /ghost

# Set permissions
RUN chown ghost. -R /ghost/content

# Set volume
VOLUME "/ghost/content"

USER ghost
EXPOSE 2368
CMD ["npm", "start"]
