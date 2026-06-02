# Vercel Hello World 🚀

A production-ready Node.js Express application optimized for Vercel Serverless Functions.

## Local Development
1. Install dependencies: `npm install`
2. Run locally: `npm start`
3. View on `http://localhost:8080`

## Vercel Deployment

### Deploy from Terminal
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel

# Deploy to Production
vercel --prod
```

### Automatic Deploy via GitHub
This repository contains a `.github/workflows/deploy.yml` file which uses GitHub Actions to automatically build and deploy code pushes to the `main` branch. 
Ensure you add `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, and `VERCEL_TOKEN` to your GitHub repository secrets.
