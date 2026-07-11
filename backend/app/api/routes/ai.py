from fastapi import APIRouter
from app.core.config import settings

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)

@router.get("/config")
async def check_config():
    return {
        "model_id": settings.IBM_MODEL_ID,
        "project_id": settings.IBM_PROJECT_ID,
        "url": settings.IBM_URL
    }