# Project Pilot

A complete React project management application built with React, Vite, and React Router.

## Features

- 📋 Project listing with pagination
- ✏️ Edit and update projects
- 🔍 View detailed project information
- 🎨 Responsive design with mini.css
- 🚀 Client-side routing with React Router
- 💾 Backend API integration with json-server

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router 7** - Client-side routing
- **mini.css** - Minimal CSS framework
- **json-server** - Mock REST API
- **PropTypes** - Runtime type checking

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rayyan123571/FWD-.git
cd projectpilot
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

1. Start the backend API server:
```bash
npm run api
```

2. In a new terminal, start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Serving Production Build

```bash
npx serve -s dist
```

## Project Structure

```
projectpilot/
├── api/
│   └── db.json           # JSON database for json-server
├── public/
│   └── assets/           # Static assets (images, logos)
├── src/
│   ├── home/
│   │   └── HomePage.jsx  # Home page component
│   ├── projects/
│   │   ├── Project.js            # Project model class
│   │   ├── MockProjects.js       # Mock data
│   │   ├── ProjectCard.jsx       # Project card component
│   │   ├── ProjectDetail.jsx     # Project detail view
│   │   ├── ProjectForm.jsx       # Project edit form
│   │   ├── ProjectList.jsx       # Project list component
│   │   ├── ProjectPage.jsx       # Single project page
│   │   ├── ProjectsPage.jsx      # Projects list page
│   │   └── projectAPI.js         # API client
│   ├── App.jsx           # Main app component with routing
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── package.json
└── vite.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run api` - Start json-server backend
- `npm run lint` - Run ESLint

## API Endpoints

The backend API runs on `http://localhost:4000` and provides:

- `GET /projects` - Get all projects (supports pagination with `_page` and `_limit`)
- `GET /projects/:id` - Get a single project
- `PUT /projects/:id` - Update a project

## Deployment

### Frontend Deployment (Vercel)

This project is deployed on Vercel. The production build automatically handles SPA routing.

#### Steps to Deploy Frontend:

1. Push your code to GitHub (already done!)
2. Go to [Vercel](https://vercel.com) and import your repository
3. Configure environment variable in Vercel:
   - Go to Project Settings → Environment Variables
   - Add: `VITE_API_URL` = `YOUR_BACKEND_API_URL`
4. Deploy!

### Backend Deployment Options

The backend needs to be deployed separately. Here are some options:

#### Option 1: Deploy to Render (Recommended - Free Tier Available)

1. Create a `server.js` file in your project root:
```javascript
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('api/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
```

2. Go to [Render](https://render.com) and create a new Web Service
3. Connect your GitHub repository
4. Configure:
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. Copy the deployed URL (e.g., `https://your-app.onrender.com`)
6. Add this URL to Vercel environment variable: `VITE_API_URL`

#### Option 2: Deploy to Railway

1. Go to [Railway](https://railway.app)
2. Create new project from GitHub repo
3. Add start command: `node server.js`
4. Copy the deployed URL
5. Update `VITE_API_URL` in Vercel

#### Option 3: Deploy to Heroku

1. Install Heroku CLI
2. Create `Procfile` with: `web: node server.js`
3. Run:
```bash
heroku create your-app-name
git push heroku main
```
4. Copy the Heroku URL
5. Update `VITE_API_URL` in Vercel

### Environment Variables

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

For local development, use:
```
VITE_API_URL=http://localhost:4000
```

For production (set in Vercel dashboard):
```
VITE_API_URL=https://your-backend-api.onrender.com
```

### Important Notes

- The frontend expects the backend to be running and accessible
- Make sure CORS is enabled on your backend (json-server handles this automatically)
- Environment variables in Vite must be prefixed with `VITE_`
- After updating environment variables in Vercel, redeploy the application
