# Mini Project Manager

A small Project Management web app to manage projects and tasks, with authentication and task management features.

---

## Features

- User authentication (Signup / Login) using JWT
- CRUD operations for Projects
- CRUD operations for Tasks within Projects
- Task status management (`todo`, `in-progress`, `done`)
- Task filtering and sorting by status and due date
- Responsive UI using React + Next.js
- RESTful API backend using Node.js + Express
- MongoDB database for data storage
- Redux Toolkit for state management
- Notifications using `react-hot-toast`

---

## Tech Stack

**Frontend:**
- React.js + Next.js  
- Redux Toolkit  
- Tailwind CSS  
- React Hot Toast  

**Backend:**
- Node.js + Express  
- MongoDB (Atlas or local)  
- JWT authentication  
- REST API  

---

## Folder Structure

/frontend
/components
/pages
/redux
/styles
/backend
/controllers
/routes
/models
/middleware
/config

yaml
Copy code

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn
- MongoDB (Atlas or local)

---

### Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
Install dependencies:

bash
Copy code
npm install
Create .env file (copy from .env.example):

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the server:

bash
Copy code
npm run dev
The backend should run on http://localhost:5000.

Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Create .env.local file (copy from .env.example):

env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:5000/api
Start the development server:

bash
Copy code
npm run dev
The frontend should run on http://localhost:3000.

API Endpoints
Auth:

POST /api/auth/signup - Register a new user

POST /api/auth/login - Login and get JWT

Projects:

GET /api/projects - Get all projects for the logged-in user

POST /api/projects - Create a new project

PUT /api/projects/:id - Update a project

DELETE /api/projects/:id - Delete a project

GET /api/projects/:id - Get project details

Tasks:

GET /api/tasks/:projectId - Get tasks of a project

POST /api/tasks/:projectId - Create a task

PUT /api/tasks/:id - Update a task

DELETE /api/tasks/:id - Delete a task

Environment Variables
Backend (.env)
env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Frontend (.env.local)
env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:5000/api
Notes
All backend routes are protected; JWT token must be sent in the Authorization header:
Authorization: Bearer <token>

Frontend communicates with backend via NEXT_PUBLIC_API_URL.

Redux Toolkit is used for state management in the frontend.

Tailwind CSS is used for responsive styling.

Task filtering and sorting are implemented on the frontend.

This project is suitable for small teams to manage projects and tasks.
