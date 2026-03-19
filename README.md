# Paverse Portfolio

A professional full-stack portfolio site with:

- `backend/`: Python `FastAPI` API
- `frontend/`: React + TypeScript + Vite application

The homepage presents two entry points:

- Resume-style portfolio
- Personal projects showcase

## Stack

- Backend: FastAPI
- Frontend: React, TypeScript, Vite, React Router
- Styling: Custom CSS design system

## Run locally

### 1. Start the backend

```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs at `http://127.0.0.1:8000`.

### 2. Start the frontend

```powershell
cd frontend
npm.cmd install
npm.cmd run dev
```

Frontend runs at `http://127.0.0.1:5173`.

## GitHub test deployment

GitHub Pages can host the frontend for testing, but it cannot run the Python backend.

This project is set up so the frontend still works on GitHub Pages by using fallback content if the backend is unavailable.

### Deploy the frontend to GitHub Pages

1. Create a GitHub repository and push this project.
2. In `frontend/package.json`, update `homepage` with your GitHub Pages URL if needed.
3. Run:

```powershell
cd frontend
npm.cmd install
npm.cmd run deploy
```

If you want to use your custom domain `paverse.in`, GitHub Pages can serve the frontend from that domain after DNS is configured.

## Production note

For a fully live full-stack deployment:

- Host frontend on GitHub Pages, Vercel, or Netlify
- Host backend on Render, Railway, Fly.io, or a VPS

Then set `VITE_API_BASE_URL` in the frontend to your backend URL.
