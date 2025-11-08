import express from 'express';
import authRoutes from './auth/index.js';
import programRoutes from './programs/index.js';
import ejsroutes from './routes_Ejs/index.js'

const router = express.Router();

// Mount routes
router.use('/auth', authRoutes);
router.use('/programs', programRoutes);
router.use('/pages',ejsroutes)

export default router;