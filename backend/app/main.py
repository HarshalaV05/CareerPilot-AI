from fastapi import FastAPI

from app.database.database import engine
from app.database.base import Base
from app.models.resume import Resume
from app.models.student import Student

from app.core.config import settings
from app.api.router import api_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Enterprise Agentic Career Intelligence Platform"
)

app.include_router(api_router)


@app.get("/", tags=["Root"])
async def root():
    return {
        "message": f"Welcome to {settings.APP_NAME}",
        "version": settings.APP_VERSION,
        "status": "Running"
    }