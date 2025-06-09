from node:18-alpine
WORKDIR /app
copy package.json ./
run npm install
copy . .
expose 3000
cmd ["node","src/server.js"]