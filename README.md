# Blog API Backend

This is a RESTful API backend for a blog website, built with Express.js and deployed on Deno. It provides endpoints for user authentication, user management, and blog post operations.

## Features

- **Authentication**: User registration, login, and JWT-based authentication.
- **User Management**: CRUD operations for users.
- **Blog Management**: Create, read, update, and delete blog posts.
- **Error Handling**: Comprehensive error handling with custom error classes.
- **Validation**: Input validation using middleware.
- **Database**: MongoDB integration for data persistence.

## Folder Structure

- **`config/`**: Database configuration and connection setup.
  - `db.js`: Database connection logic.
- **`controllers/`**: Route handlers for different endpoints.
  - `auth.controller.js`: Handles authentication-related requests.
  - `blogs.controller.js`: Manages blog post operations.
  - `users.controller.js`: Handles user management requests.
- **`middlewares/`**: Custom middleware functions.
  - `auth.js`: Authentication middleware.
  - `isOwner.js`: Ownership verification middleware.
  - `validate.js`: Validation middleware.
- **`models/`**: Mongoose models for database schemas.
  - `Blog.js`: Blog post model.
  - `User.js`: User model.
- **`routes/`**: Route definitions.
  - `auth.routes.js`: Authentication routes.
  - `blogs.routes.js`: Blog routes.
  - `users.routes.js`: User routes.
- **`services/`**: Business logic layer.
  - `auth.service.js`: Authentication services.
  - `blogs.service.js`: Blog services.
  - `users.service.js`: User services.
- **`utils/`**: Utility functions and error handlers.
  - `errorHandlers/`: Custom error classes.
- **`validation/`**: Validation schemas.
  - `auth.validation.js`: Authentication validation.
  - `blogs.validation.js`: Blog validation.

## Deployment

This API is deployed on Deno, utilizing its runtime for server-side execution.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install` (or use Deno's import map if applicable).
3. Set up environment variables in a `.env` file.
4. Run the server: `npm start`.

## API Endpoints

- **Auth**: `/api/auth`
  - POST `/register`: Register a new user.
  - POST `/login`: Login user.
- **Users**: `/api/users`
  - GET `/`: Get all users.
  - GET `/:id`: Get user by ID.
  - PUT `/:id`: Update user.
  - DELETE `/:id`: Delete user.
- **Blogs**: `/api/blogs`
  - GET `/`: Get all blog posts.
  - POST `/`: Create a new blog post (authenticated).
  - GET `/:id`: Get blog post by ID.
  - PUT `/:id`: Update blog post (owner only).
  - DELETE `/:id`: Delete blog post (owner only).

## Technologies Used

- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Morgan for logging
- CORS for cross-origin requests
- Deno for deployment