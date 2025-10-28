import express from 'express';
import { authService } from '#@/modules/[auth]/index.js';
import { protect } from '#@/middlewares/auth.js';

const router = express.Router();

// @route   POST /api/auth/register
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const result = await authService.registerUser(req.body);
    res.status(201).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(400).json({
      success : false,
      message:error.message

    })
  }
});

// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }
    const result = await authService.loginUser(email, password);
   
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: result
    });
  } catch (error) {
    res.status(401).json({
        success: false,
        message: error.message
      });
    }
});

// @route   GET /api/auth/me
// @access  Private
router.get('/me', protect, async (req, res) => {
  try {
    const user = await authService.getUserById(req.user.id);
   res.status(200).json({
      success: true,
      data: user
    });
    
  } catch (error) {
    if (error.message === 'User not found') {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
  }})

router.get('/users', protect, async (req, res) => {
  try {
    const users = await authService.getAllUsers();
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching users'
    });
  }
});



export default router;

