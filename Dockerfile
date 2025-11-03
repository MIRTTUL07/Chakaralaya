# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY . /app

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the application code

# Start the development server
CMD ["pnpm", "run", "dev"]
