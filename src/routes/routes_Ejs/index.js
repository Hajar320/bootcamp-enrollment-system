import express from 'express';
import { authService } from '#@/modules/[auth]/index.js';
import { programService } from '#@/modules/programs/index.js';


const router = express.Router();

router.get('/',(req,res)=>{
    res.render('pages/home');
})


router.get('/login',(req,res)=>{
    res.render('pages/login');
})

router.get('/register',(req,res)=>{
    res.render('pages/register');
})

router.get('/admin',(req,res)=>{
    res.render('pages/admin');
})

router.get('/student',(req,res)=>{
    res.render('pages/student');
})


router.get('/users', async (req, res) => {
  try {
    const users = await authService.getAllUsers();
    res.render('pages/users', {
      users: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching users'
    });
  }
});


router.get('/programs', async (req, res) => {
    try {
        const programs = await programService.getAllPrograms();
        
        // Ensure programs is always an array
        const safePrograms = Array.isArray(programs) ? programs : [];
        
        console.log(`Rendering programs page with ${safePrograms.length} programs`);
        
        res.render('pages/programs', { 
            Prog: safePrograms
        });
    } catch (error) {
        console.error('Error fetching programs:', error);
        res.status(500).render('pages/error', {
            message: 'Unable to load programs page',
            error: process.env.NODE_ENV === 'development' ? error : {}
        });
    }
});
// @route   GET /api/programs/:id
// @access  Public
router.get('/:id', async (req, res, next) => {
  try {
   const program = await programService.getProgramById(req.params.id);
   const data = program.programs;
        console.log('Program data:', data.name);
     res.render('pages/programDetails', { 
            program: data  // This makes 'program' available in EJS
        });
    
  } catch (error) {
    if (error.message === 'Program not found') {
      return res.status(404).json({
        success: false,
        message: 'Program not found'
      });
    }
}
})


export default router;

