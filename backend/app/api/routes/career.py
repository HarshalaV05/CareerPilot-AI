from fastapi import APIRouter
from app.services.career_service import CareerService

router = APIRouter(
    prefix="/career",
    tags=["Career"]
)


@router.get("/recommendations")
async def recommendations():
    return CareerService.get_recommendations()