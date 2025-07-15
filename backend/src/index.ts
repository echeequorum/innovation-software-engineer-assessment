import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// TODO: Implement your API endpoints here
// Required endpoints:
// - GET /api/issues - Get all issues
// - POST /api/issues - Create a new issue
// - PUT /api/issues/:id - Update an issue's status

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Placeholder endpoints with TODO comments
app.get('/api/issues', (req, res) => {
  // TODO: Implement getting all issues
  res.json([]);
});

app.post('/api/issues', (req, res) => {
  // TODO: Implement creating a new issue
  res.status(201).json({ message: 'Issue creation not implemented yet' });
});

app.put('/api/issues/:id', (req, res) => {
  // TODO: Implement updating an issue's status
  res.json({ message: 'Issue update not implemented yet' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
