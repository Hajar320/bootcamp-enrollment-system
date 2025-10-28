import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a program name'],
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  curriculum: [String],
  requirements: [String],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Program = mongoose.model('program', programSchema);

export default Program ;
 