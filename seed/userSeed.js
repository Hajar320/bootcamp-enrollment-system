import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';


// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI);
  console.log("🎉 Connected to MongoDB successfully");
};


// users  schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6
  },
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student'
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Check if password matches
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Users = mongoose.model('User', userSchema);

// Sample users data
const users = [
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    password: 'Password123',
    role: 'student'
  },
  {
    name: 'Bob Smith',
    email: 'bobsmith@example.com',
    password: 'MySecurePass456',
    role: 'admin'
  },
  {
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    password: 'Welcome789',
    role: 'student'
  },
  {
    name: 'Dana Lee',
    email: 'dana.lee@example.com',
    password: 'SecretPass007',
    role: 'student'
  },
  {
    name: 'Ethan Williams',
    email: 'ethan.williams@example.com',
    password: 'AdminPower2024',
    role: 'admin'
  }
];


// Seed function
const seedUsers = async () => {
  try {
    // Clear existing users
    await Users.deleteMany({});
    console.log('🗑️  Cleared existing users');

    for (const userData of users) {
      const user = new Users(userData);
      await user.save();
    }

    // Insert new users
    const createdUsers = await Users.insertMany(users);
    console.log(`✅ Seeded ${createdUsers.length} users`);

    // Display seeded data
    console.log('\n📋 Seeded Users:');
    createdUsers.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} - ${user.role} -${user.email}`);});

  } catch (error) {
    console.error('❌ Error seeding users:', error);
  } finally {
    // Close connection
    await mongoose.disconnect();
    console.log('📤 Disconnected from MongoDB');
  }
};



// Run the seed
const runSeed = async () => {
  await connectDB();
  await seedUsers();
};



runSeed();
