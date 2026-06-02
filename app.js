const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// 2. Main route requested by requirements
app.get('/', (req, res) => {
  res.send('Hello World from GCP Cloud Run');
});

// 6. Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// 3. The application must listen on process.env.PORT || 8080
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
