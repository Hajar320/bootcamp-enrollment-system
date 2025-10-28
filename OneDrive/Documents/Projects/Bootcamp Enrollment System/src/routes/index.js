import express from 'express';
import authRoutes from './auth/index.js';
import programRoutes from './programs/index.js';

const router = express.Router();

// Mount routes
router.use('/auth', authRoutes);
router.use('/programs', programRoutes);

export default router;