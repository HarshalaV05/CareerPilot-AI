from fastapi import FastAPI

from app.core.config import settings
from app.api.router import api_router

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