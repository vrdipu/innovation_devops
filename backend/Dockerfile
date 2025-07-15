FROM node:18

# Install netcat (OpenBSD version)
RUN apt-get update && apt-get install -y netcat-openbsd

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x wait-for-db.sh

EXPOSE 3000

CMD ["./wait-for-db.sh", "node", "server.js"]
