FROM node

WORKDIR /app/frontend_ui
COPY package.json /app/frontend_ui

RUN npm install
RUN npm config set unsafe-perm true

EXPOSE 3000
CMD ["npm", "start"]
