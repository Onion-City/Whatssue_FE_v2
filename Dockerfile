FROM node:18.17-alpine
WORKDIR /app/frontend

COPY package*.json ./
RUN npm install

COPY . .

# 애플리케이션을 빌드합니다.
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"] 