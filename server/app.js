import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bugRoutes from './routes/bugs.js';

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// Test route for health check
app.get('/health', (req, res) => {
  res.send('OK');
});

// Bug routes
app.use('/api/bugs', bugRoutes);

// Error handler (generic)
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;
