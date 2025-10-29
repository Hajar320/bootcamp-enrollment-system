import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './databases/connect-mongo.js';
import routes from './routes/index.js';

// Load env vars
dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount API routes
app.use('/api', routes);

// 404 Handler - Catch unregistered routes
app.use((req, res,next) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});


// Health check
app.get('/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Bootcamp Enrollment System API is running!',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📚 Bootcamp Enrollment System API`);
  console.log(`🔗 http://localhost:${PORT}`);
});
