# WiCS Workshop 1 - TigerHack Project

This is a full-stack web application developed during the WiCS Workshop 1 at TigerHack. The project features a modern React frontend and a Node.js/Express backend with MongoDB integration.

## Project Structure

```
├── frontend/                    # React frontend application
│   ├── src/                    # Source code
│   │   ├── components/         # React components
│   │   ├── assets/            # Static assets (images, fonts, etc.)
│   │   ├── App.jsx            # Main application component
│   │   └── main.jsx           # Application entry point
│   ├── public/                 # Public static files
│   ├── .env                    # Frontend environment variables
│   ├── package.json           # Frontend dependencies and scripts
│   ├── vite.config.js         # Vite configuration
│   └── index.html             # HTML entry point
│
├── backend/                    # Node.js/Express backend server
│   ├── routes/                # API route handlers
│   │   └── book.route.js      # Book-related API endpoints
│   ├── models/                # Database models
│   │   └── book.model.js      # Book data model
│   ├── .env                   # Backend environment variables
│   ├── server.js              # Main server file
│   ├── vercel.json            # Vercel deployment configuration
│   └── package.json           # Backend dependencies and scripts
│
└── README.md                   # Project documentation
```

## Technology Stack

### MERN Stack Components

- **MongoDB** (v8.12.1) - Database
- **Express.js** (v4.21.2) - Backend Framework
- **React** (v19.0.0) - Frontend Library
- **Node.js** - Runtime Environment

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## Getting Started

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory with the following variables:

   ```
   VITE_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Development

- Frontend runs on `http://localhost:5173` by default
- Backend runs on `http://localhost:5000` by default
- Use `npm run lint` in the frontend directory to check for code style issues
- Use `npm run build` in the frontend directory to create a production build

## License

This project is licensed under the ISC License.
