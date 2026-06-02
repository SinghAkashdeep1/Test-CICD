# Use Node.js 20 Alpine for a smaller, secure production image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Final stage for smaller image size and better security
FROM node:20-alpine

# Set Node environment to production
ENV NODE_ENV=production

# Run as non-root user for security (best practice)
USER node

# Set working directory
WORKDIR /usr/src/app

# Copy only the necessary files from builder stage
COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=node:node /usr/src/app/app.js ./
COPY --from=builder --chown=node:node /usr/src/app/package.json ./

# Expose port 8080 (Cloud Run default)
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
