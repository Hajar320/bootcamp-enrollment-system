```markdown
# 🎓 Bootcamp Enrollment System

A simple REST API for managing bootcamp programs with user authentication and admin features.

## 🚀 Features

- **User Authentication** - Register and login with JWT
- **Program Management** - CRUD operations for bootcamp programs
- **Admin Panel** - Admins can view all users
- **Role-based Access** - Admin and user roles
- **MongoDB Database** - Data persistence with Mongoose

## 📋 Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create .env file**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/bootcamp-db
   JWT_SECRET=your-secret-key
   ```

3. **Run the server**
   ```bash
   npm run dev
   ```
📁 Project Structure

```text
bootcamp-enrollment-system/
├── src/
│   ├── databases/
│   │   └── connect-mongo.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   └── roles.js
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── model/
│   │   │   ├── services/
│   │   │   └── index.js
│   │   ├── programs/
│   │   │   ├── model/
│   │   │   ├── services/
│   │   │   └── index.js
│   │   └── index.js
│   ├── routes/
│   │   ├── auth/
│   │   ├── programs/
│   │   └── index.js
│   └── main.js
├── seed/
│   ├── programSeed.js
│   └── userSeed.js
├── .env
├── package.json
└── README.md
```

## 🛣️ API Endpoints

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Public 
- `GET /api/programs` - Get all programs (Public)
- `GET /api/programs/:id` - Get single program (Public)

### private (Admin Only)
- `GET /api/users` - Get all users
- `POST /api/programs` - Create program 
- `PUT /api/programs/:id` - Update program 
- `DELETE /api/programs/:id` - Delete program 


## 📊 Sample Data

### Programs
```json
{
  "name": "Web Development Bootcamp",
  "description": "Learn full-stack web development",
  "duration": "12 weeks",
  "price": 2999
}
```

### Users
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "user"
}
```

## 🛡️ Security

- Passwords are hashed with bcrypt
- JWT tokens for authentication
- Protected routes require valid token
- Admin routes require admin role


## 💡 Skills Learned

- Node.js and Express.js
- MongoDB with Mongoose
- JWT Authentication
- Middleware Development
- REST API Design
- Error Handling
- Role-based Authorization
- Modular Architecture

## 🚀 Next Skills to Learn

React.js - 

TypeScript -

Deployment - Deploy to cloud

Docker - Containerization


The API will run on `http://localhost:5000`
```
