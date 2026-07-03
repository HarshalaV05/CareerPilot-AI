from fastapi import APIRouter

router = APIRouter(
    prefix="/roadmap",
    tags=["Roadmap"]
)


@router.get("/")
async def roadmap():
    return {
        "phase": "Foundation",
        "status": "In Progress"
    }