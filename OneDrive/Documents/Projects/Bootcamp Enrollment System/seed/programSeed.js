import mongoose from 'mongoose';
import dotenv from 'dotenv';


// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI);
  console.log("🎉 Connected to MongoDB successfully");
};


// programs  schema
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

const Programs = mongoose.model('program', programSchema);


// Sample programs data
const programs = [{
  name: "Full Stack Web Development Bootcamp",
  description: "Comprehensive training in modern web technologies including React, Node.js, and MongoDB",
  duration: "12 weeks",
  price: 2999,
  curriculum: [
    "HTML & CSS Fundamentals",
    "JavaScript ES6+",
    "React & Redux",
    "Node.js & Express",
    "MongoDB & Mongoose",
    "Deployment & DevOps"
  ],
  requirements: [
    "Basic programming knowledge",
    "Laptop with internet access",
    "Dedication to complete assignments"
  ],
  isActive: true,
  createdAt: "2024-01-15T10:30:00.000Z",
  updatedAt: "2024-01-20T14:45:00.000Z"
},

{
  name: "Data Science Professional",
  description: "Master data analysis, machine learning, and data visualization with Python",
  duration: "16 weeks",
  price: 3499,
  curriculum: [
    "Python for Data Science",
    "Pandas & NumPy",
    "Data Visualization",
    "Machine Learning Algorithms",
    "SQL for Data Analysis",
    "Big Data Tools"
  ],
  requirements: [
    "Intermediate Python knowledge",
    "Statistics background preferred",
    "College-level math"
  ],
  isActive: true,
  createdAt: "2024-02-01T09:15:00.000Z",
  updatedAt: "2024-02-10T11:20:00.000Z"
},

{
  name: "React Native Mobile Development",
  description: "Build cross-platform mobile applications using React Native",
  duration: "8 weeks",
  price: 1999,
  curriculum: [
    "React Native Fundamentals",
    "Navigation & Routing",
    "State Management",
    "Native Modules",
    "App Deployment",
    "Performance Optimization"
  ],
  requirements: [
    "JavaScript experience",
    "React basics",
    "Mobile development interest"
  ],
  isActive: false,
  createdAt: "2024-01-10T08:00:00.000Z",
  updatedAt: "2024-03-05T16:30:00.000Z"
}]

// Seed function
const seedPrograms = async () => {
  try {

    await Programs.deleteMany({});
    console.log('🗑️  Cleared existing programs');

    for (const pData of programs ) {
      const program = new Programs(pData);
      await program.save();
    }

    const createdPrograms = await Programs.insertMany(programs);
    console.log(`✅ Seeded ${createdPrograms.length} programs`);

    // Display seeded data
    console.log('\n📋 Seeded programs:');
    createdPrograms.forEach((program, index) => {
      console.log(`${index + 1}. ${program.name}`);});

  } catch (error) {
    console.error('❌ Error seeding programs:', error);
  } finally {
    // Close connection
    await mongoose.disconnect();
    console.log('📤 Disconnected from MongoDB');
  }
};



// Run the seed
const runSeed = async () => {
  await connectDB();
  await seedPrograms();
};



runSeed();
