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

This project is deployed on Vercel. The production build automatically handles SPA routing.
