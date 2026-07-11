from fastapi import APIRouter

from app.schemas.interview_schema import InterviewRequest
from app.ai.granite.granite_service import GraniteService

router = APIRouter(
    prefix="/interview",
    tags=["Interview"]
)


@router.post("/generate")
async def generate(request: InterviewRequest):

    result = GraniteService.generate_interview_questions(
        request.role
    )

    return result

@router.get("/debug")
async def debug():
    return {"message": "THIS IS MY CURRENT INTERVIEW FILE"}