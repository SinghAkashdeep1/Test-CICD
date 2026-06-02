const express = require('express');
const app = express();

app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello World from Vercel');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Export the app for Vercel's serverless environment
module.exports = app;

// Listen only if running locally (not on Vercel)
if (require.main === module) {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Local server is running on port ${PORT}`);
  });
}
