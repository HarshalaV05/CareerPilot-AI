from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.schemas.student_schema import StudentCreate, StudentResponse
from app.services.student_service import StudentService

router = APIRouter(
    prefix="/student",
    tags=["Student"]
)


@router.post(
    "/",
    response_model=StudentResponse
)
def create_student(
    student: StudentCreate,
    db: Session = Depends(get_db)
):
    return StudentService.create_student(db, student)


@router.get(
    "/",
    response_model=List[StudentResponse]
)
def get_students(
    db: Session = Depends(get_db)
):
    return StudentService.get_students(db)