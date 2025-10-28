import express from 'express';
import { programService } from '#@/modules/programs/index.js';
import { protect } from '#@/middlewares/auth.js';
import { authorize } from '#@/middlewares/roles.js';

const router = express.Router();

// @route   GET /api/programs

router.get('/', async (req, res, next) => {
  try {
    const programs = await programService.getAllPrograms();
    res.status(200).json({
      success: true,
      count: programs.length,
      data: programs
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching programs'
    });
  }
});
// @route   GET /api/programs/:id
// @access  Public
router.get('/:id', async (req, res, next) => {
  try {
    const result = await programService.getProgramById(req.params.id);
     res.status(200).json({
      success: true,
      data: result
    });
    
  } catch (error) {
    if (error.message === 'Program not found') {
      return res.status(404).json({
        success: false,
        message: 'Program not found'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error fetching program'
    });
  }
});

// @route   POST /api/programs/admin
// @access  Private/Admin
router.post('/', protect, authorize('admin'), async (req, res) => {
  try {
    const program = await programService.createProgram(req.body);
    res.status(201).json({
      success: true,
      message: " program created successfully",
      data: program
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid program data'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error creating program'
    });
  }
});



router.put('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const program = await programService.updateProgram(req.params.id, req.body);
     res.status(200).json({
      success: true,
      message: "Program updated successfully",
      data: program
    });
    
  } catch (error) {
    if (error.message === 'Program not found') {
      return res.status(404).json({
        success: false,
        message: 'Program not found'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error updating program'
    });
  }
});



router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const program = await programService.deleteProgram(req.params.id);
   if (!program) {
      return res.status(404).json({
        success: false,
        message: "Program not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Program deleted successfully",
      data: program
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
    // or keep for global error handler: next(error);
  }
});

export default router;

