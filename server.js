// Import necessary modules
const express = require('express');
const cors = require('cors');

// Initialize Express
const app = express();
const PORT = 3000;

// Middleware to handle CORS
app.use(cors());

// API Endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
