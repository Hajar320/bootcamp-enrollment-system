

## 📖 Project Overview

The Bootcamp Castle Enrollment System is a comprehensive full-stack web application designed to manage coding bootcamp programs, student enrollments, and administrative operations. Built with a modern tech stack featuring Tailwind CSS for styling, this platform offers an intuitive and responsive user experience.

## 🎯 Project Purpose

This system addresses the challenges of managing educational bootcamp programs by providing:

- **🔐 User Registration & Authentication** - Secure account management with role-based access
- **👨‍💼 Administrative Control** - Complete oversight of programs and users
- **🎓 Student Management** - Easy program enrollment and progress tracking
- **📚 Program Catalog** - Comprehensive course management and discovery

## 🏗️ Architecture & Design

### 🎨 Frontend Design System
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Responsive Design** - Mobile-first approach with breakpoint optimization

### 🚀 Backend Foundation
- **Node.js & Express.js** - High-performance server framework
- **MongoDB with Mongoose** - Flexible database with object modeling
- **JWT Authentication** - Secure token-based authentication system
- **REST API Design** - Clean, structured, and scalable endpoints

📄 Page Overview

🌐 Public Pages

Home (ejs/pages/) - Landing page with program overview

Login (ejs/pages/login) - User authentication

Register (ejs/pages/register) - Account creation with role selection

👨‍💼 Admin Pages

Admin Dashboard (ejs/pages/admin) - System overview and management

Program Management (ejs/pages/programs) - Add, edit, and delete programs

User Management (ejs/pages/users) - View and manage all users

🎓 Student Pages

Student Dashboard (ejs/pages/student) - Personalized learning portal

Programs (ejs/pages/programs) - Browse all available bootcamps

Program Details (ejs/pages/programs/:id) - Detailed course information and curriculum

## 🎭 User Interface Flows

### Public User Flow
1. **Landing Page** → Learn about bootcamp offerings
2. **Registration** → Create account with role selection
3. **Login** → Access authenticated features

### Student User Flow
1. **Student Dashboard** → Personalized learning portal
2. **Programs List** → Browse available courses
3. **Program Details** → Explore specific bootcamp information

### Admin User Flow
1. **Admin Dashboard** → System overview and management
2. **User Management** → Monitor and manage all users
3. **Program Management** → Create and maintain courses


## 🚀 Core Features

### 🔐 Authentication System
- **Role-based Registration** - Student/Admin role selection during signup
- **JWT Security** - Token-based authentication for secure sessions
- **Protected Routes** - Middleware-based access control

## 💻 Technical Stack

### 🔧 Backend Technologies
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT + bcrypt
- **Templating**: EJS with view partials

### 🎨 Frontend Technologies
- **Styling**: Tailwind CSS
- **Templating**: EJS (Embedded JavaScript)
- **Responsive Design**: Mobile-first Tailwind utilities
- **Icons & UI**: Tailwind component classes

### 🛠 Development Tools
- **Environment Management**: .env configuration
- **Hot Reloading**: Nodemon for development
- **Build Process**: Node.js scripts
- **Version Control**: Git

## 📁 Project Structure

```
bootcamp-enrollment-system/
|──seed/
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
│   │   ├── routes_EJS/
│   │   └── index.js
|   |──── main.js
|
│──── views/
│      ├── layout/
│      │   └── layout.ejs
│      └── pages/
│          ├── admin.ejs
│          ├── home.ejs
│          ├── login.ejs
│          ├── programDetails.ejs
│          ├── programs.ejs
│          ├── register.ejs
│          ├── student.ejs
│          └── users.ejs
├── .env
├── package.json
└── README.md
```

## 📊 Sample Data

The application includes sample programs such as:

- **Full Stack Web Development Bootcamp** - 12 weeks, $2999
- **Data Science Professional** - 16 weeks, $3499  
- **React Native Mobile Development** - 8 weeks, $1999

## 🛡️ Security Features

- **Password Hashing** - bcrypt encryption for user credentials
- **JWT Tokens** - Secure authentication without server sessions
- **Route Protection** - Middleware-based access control
- **Input Validation** - Server-side data sanitization
- **Role-based Permissions** - Granular access control

## 🔮 Future Enhancements

- [ ] **Advanced Program Features** - Enrollment, progress tracking
- [ ] **Email Notifications** - Nodemailer for user communications
- [ ] **File Uploads** - Profile pictures and course materials
- [ ] **Advanced Analytics** - User engagement and program performance
- [ ] **Real-time Features** - WebSocket integration for live updates


