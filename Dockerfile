FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the app
CMD ["node", "dist/index.js"]