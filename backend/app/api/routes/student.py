from fastapi import APIRouter

router = APIRouter(
    prefix="/student",
    tags=["Student"]
)


@router.get("/profile")
async def get_profile():
    return {
        "name": "Demo Student",
        "college": "JSSATE Bengaluru",
        "branch": "Electronics and Communication Engineering",
        "year": "Final Year"
    }