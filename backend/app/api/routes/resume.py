from fastapi import APIRouter

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)


@router.get("/status")
async def resume_status():
    return {
        "uploaded": False,
        "message": "No resume uploaded."
    }