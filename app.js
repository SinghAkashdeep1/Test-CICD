const express = require('express');
const app = express();

app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Vercel CI/CD Demo</title>
        <style>
          body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background: #fafafa; color: #333; flex-direction: column; text-align: center; }
          h1 { color: #0070f3; margin-bottom: 8px; }
          .badge { background: #0070f3; color: white; padding: 4px 10px; border-radius: 6px; font-weight: bold; font-size: 14px; }
        </style>
      </head>
      <body>
        <h1>Hello World from Vercel! 🚀</h1>
        <p>This update was <span class="badge">Auto-Deployed</span> via GitHub Actions CI/CD Pipeline!</p>
        <p>Deployed at: ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', updated: true });
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
