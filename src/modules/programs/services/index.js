import  { default as Program }  from '../model/index.js';

export const programService = {
  // Get all active programs
  getAllPrograms: async () => {
   try{
    const programs = await Program.find({ isActive: true });
    if (programs.length === 0) {
      console.log('No active programs found');
    }
    console.log(`Found ${programs.length} active programs`);
    return programs;
 }catch(error){
    console.log('Error in get AllPrograms',error);
    throw error;
  }
},
  // Get single program 
  getProgramById: async (programId) => {
    const programs = await Program.findById(programId);
    return { programs };
  },

  // Create new program
  createProgram: async (programData) => {
    return await Program.create(programData);
  },

  // Update program
  updateProgram: async (programId, updateData) => {
    const program = await Program.findByIdAndUpdate(
      programId, 
      updateData, 
      { new: true, runValidators: true }
    );
    
    if (!program) {
      throw new Error('Program not found');
    }
    
    return program;
  },

  // Delete program (soft delete)
  deleteProgram: async (programId) => {
     try {
    const program = await Program.findByIdAndUpdate(
      programId,
      { isActive: false }, // Soft delete - mark as inactive
      { new: true } // Return the updated document
    );
    
    if (!program) {
      throw new Error('Program not found');
    }

    console.log(`✅ Program soft deleted: ${program.name}`);
    return program;
    
  } catch (error) {
    console.error('❌ Error deleting program:', error);
    throw error;
  }
}
}