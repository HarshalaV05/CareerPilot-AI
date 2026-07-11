from fastapi import APIRouter

from app.api.routes import (
    ai,
    health,
    student,
    resume,
    career,
    roadmap,
    interview,
    dashboard,
)

api_router = APIRouter()

api_router.include_router(health.router)
api_router.include_router(student.router)
api_router.include_router(resume.router)
api_router.include_router(career.router)
api_router.include_router(roadmap.router)
api_router.include_router(interview.router)
api_router.include_router(dashboard.router)
api_router.include_router(ai.router)