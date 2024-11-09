# Step 1: Use an official Node.js image for building React
FROM node:18-alpine AS build

# Step 2: Set working directory
WORKDIR /usr/src/app

# Step 3: Install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the source code
COPY . .

# Step 5: Build the React app
RUN npm run build

# Step 6: Use an Nginx server to serve the build
FROM nginx:alpine

# Step 7: Copy the React build to the Nginx server
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Step 8: Expose port 80
EXPOSE 80
