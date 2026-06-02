# GCP Cloud Run Hello World

A production-ready Node.js Express application optimized for Google Cloud Run.

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run the application locally
npm start
```

## Docker

```bash
# 1. Build the Docker image
docker build -t gcp-hello-world .

# 2. Run the Docker container locally
docker run -p 8080:8080 gcp-hello-world
```

## GitHub Deployment

```bash
# 1. Initialize git repository
git init

# 2. Add files
git add .

# 3. Commit changes
git commit -m "Initial commit: Production-ready Node.js Express app"

# 4. Add remote (Replace YOUR_GITHUB_USERNAME and REPO_NAME)
git remote add origin https://github.com/SinghAkashdeep1/Test-CICD.git


# 5. Push to GitHub
git branch -M main
git push -u origin main
```

## Google Cloud Run Deployment

```bash
# 1. Login to Google Cloud
gcloud auth login

# 2. Set your GCP Project (Replace YOUR_PROJECT_ID)
gcloud config set project YOUR_PROJECT_ID

# 3. Enable required APIs
gcloud services enable run.googleapis.com artifactregistry.googleapis.com

# 4. Create an Artifact Registry repository
gcloud artifacts repositories create cloud-run-repo \
  --repository-format=docker \
  --location=us-central1 \
  --description="Docker repository for Cloud Run services"

# 5. Authenticate Docker with Artifact Registry
gcloud auth configure-docker us-central1-docker.pkg.dev

# 6. Build and tag the Docker image
docker build -t us-central1-docker.pkg.dev/YOUR_PROJECT_ID/cloud-run-repo/gcp-hello-world:v1 .

# 7. Push the image to Artifact Registry
docker push us-central1-docker.pkg.dev/YOUR_PROJECT_ID/cloud-run-repo/gcp-hello-world:v1

# 8. Deploy to Cloud Run
gcloud run deploy hello-world-service \
  --image us-central1-docker.pkg.dev/YOUR_PROJECT_ID/cloud-run-repo/gcp-hello-world:v1 \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```
