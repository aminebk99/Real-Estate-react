FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

# Set proxy if needed
# RUN npm config set proxy http://your.proxy.url:port
# RUN npm config set https-proxy http://your.proxy.url:port

# Update npm version if needed
RUN npm install -g npm@10.5.0

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 5172

CMD ["nginx", "-g", "daemon off;"]
