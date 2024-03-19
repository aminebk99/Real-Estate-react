# Use an official Node runtime as a parent image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build your React app
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app from the build stage to the nginx web root directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 5172

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
