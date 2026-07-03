from fastapi import APIRouter

router = APIRouter(
    prefix="/career",
    tags=["Career"]
)


@router.get("/recommendations")
async def recommendations():
    return {
        "recommended_roles": [
            "Software Engineer",
            "AI Engineer",
            "Cloud Engineer"
        ]
    }