# Authentication System Documentation

## Overview

This project implements a complete authentication and authorization system using React, TypeScript, and JWT tokens. The system handles user registration, login, logout, and token refresh automatically.

## Features

- **User Registration**: Complete signup flow with validation
- **User Login**: Secure login with JWT token storage
- **Automatic Token Refresh**: Handles expired access tokens automatically
- **Route Protection**: Guards for authenticated and guest-only routes
- **Persistent Sessions**: Tokens stored in localStorage
- **Error Handling**: Comprehensive error handling and user feedback

## API Endpoints

### Authentication Endpoints

#### Sign Up
- **URL**: `POST /auth/sign-up`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "username": "username",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "statusCode": 200,
    "message": "Success",
    "result": {
      "id": 1,
      "email": "user@example.com",
      "username": "username"
    }
  }
  ```

#### Sign In
- **URL**: `POST /auth/sign-in`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "statusCode": 200,
    "message": "Success",
    "result": {
      "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
  }
  ```

#### Sign Out
- **URL**: `POST /auth/sign-out`
- **Headers**: `Authorization: Bearer <access_token>`
- **Response**:
  ```json
  {
    "statusCode": 200,
    "message": "Successfully signed out"
  }
  ```

#### Refresh Token
- **URL**: `POST /auth/refresh`
- **Request Body**:
  ```json
  {
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```
- **Response**:
  ```json
  {
    "statusCode": 200,
    "message": "Success",
    "result": {
      "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
  }
  ```

## Components and Hooks

### AuthContext
The main authentication context that provides:
- `user`: Current user object
- `isAuthenticated`: Boolean indicating if user is logged in
- `isLoading`: Boolean indicating if auth state is being initialized
- `login(credentials)`: Function to log in user
- `signup(userData)`: Function to register user
- `logout()`: Function to log out user

### Guards
- **UserOnlyGuard**: Protects routes that require authentication
- **GuestOnlyGuard**: Protects routes that should only be accessible to non-authenticated users

## Usage Examples

### Using the Auth Context
```tsx
import { useAuth } from '../contexts/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();

  const handleLogin = async () => {
    try {
      await login({ email: 'user@example.com', password: 'password123' });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
```

### Protected Routes
```tsx
// Routes that require authentication
<Route element={<UserOnlyGuard />}>
  <Route path="/profile" element={<Profile />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Route>

// Routes only for guests
<Route element={<GuestOnlyGuard />}>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
</Route>
```

## Token Management

### Storage
- Access tokens and refresh tokens are stored in localStorage
- User data is also stored in localStorage for persistence
- Tokens are automatically included in API requests

### Automatic Refresh
The system automatically handles token refresh:
1. When an API request returns 401 Unauthorized
2. The system attempts to refresh the token using the refresh token
3. If successful, the new tokens are stored and the original request is retried
4. If unsuccessful, the user is logged out and redirected to login

## Security Features

- **JWT Tokens**: Secure token-based authentication
- **Automatic Token Refresh**: Seamless user experience
- **Route Protection**: Prevents unauthorized access
- **Error Handling**: Graceful handling of authentication errors
- **Token Cleanup**: Proper cleanup on logout

## Environment Variables

Make sure to set the following environment variable:
```
VITE_API_BASE_URL=http://localhost:8000/api
```

## Error Handling

The system handles various authentication errors:
- Invalid credentials
- Expired tokens
- Network errors
- Server errors

All errors are displayed to the user with appropriate messages and the UI is updated accordingly.