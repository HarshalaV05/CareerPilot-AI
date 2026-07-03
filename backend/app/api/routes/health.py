from fastapi import APIRouter
from app.core.config import settings

router = APIRouter(
    prefix="/health",
    tags=["Health"]
)


@router.get("/")
async def health():
    return {
        "status": "Healthy",
        "application": settings.APP_NAME,
        "version": settings.APP_VERSION
    }