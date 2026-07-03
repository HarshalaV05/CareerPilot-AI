from fastapi import APIRouter

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/summary")
async def summary():
    return {
        "profile_completed": 20,
        "resume_uploaded": False,
        "career_score": 0
    }