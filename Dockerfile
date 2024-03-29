FROM node:18.17-alpine
WORKDIR /app/frontend

COPY package*.json ./
RUN npm install
RUN yarn install

COPY . .

EXPOSE 3000
CMD ["npm", "start"] 