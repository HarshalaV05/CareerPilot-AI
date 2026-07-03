from fastapi import APIRouter

router = APIRouter(
    prefix="/interview",
    tags=["Interview"]
)


@router.get("/questions")
async def questions():
    return {
        "questions": [
            "Tell me about yourself.",
            "Explain OOP concepts.",
            "What is FastAPI?"
        ]
    }