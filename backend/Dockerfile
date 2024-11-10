# Step 1: Use an official Node.js image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application code
COPY . .

# Step 6: Expose the backend port
EXPOSE 8080

# Step 7: Start the application
CMD ["npm", "start"]
