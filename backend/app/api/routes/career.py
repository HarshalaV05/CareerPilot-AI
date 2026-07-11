from fastapi import APIRouter

from app.schemas.career_schema import CareerRequest
from app.ai.granite.granite_service import GraniteService

router = APIRouter(
    prefix="/career",
    tags=["Career"]
)


@router.post("/recommend")
async def recommend(request: CareerRequest):

    result = GraniteService.recommend_career(
        request.profile
    )

    return result