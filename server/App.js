// server/app.js

import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import bugRoutes from './routes/bugs.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// Health check
app.get('/health', (_, res) => res.status(200).send('OK'));

// Routes
app.use('/api/bugs', bugRoutes);

// Error handler
app.use(errorHandler);

export default app;
