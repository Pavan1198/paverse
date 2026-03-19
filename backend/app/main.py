from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .data import PROFILE, PROJECTS

app = FastAPI(
    title="Paverse Portfolio API",
    description="Backend API for the Paverse portfolio website.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/profile")
def get_profile() -> dict:
    return PROFILE


@app.get("/api/projects")
def get_projects() -> list[dict]:
    return PROJECTS


@app.get("/api/resume")
def get_resume() -> dict:
    return {
        "hero": {
            "headline": "Building products that look sharp and work hard.",
            "subheadline": (
                "A resume-style overview of experience, strengths, and delivery style."
            ),
        },
        "profile": PROFILE,
    }
