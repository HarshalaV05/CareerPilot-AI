import os
import shutil

from fastapi import APIRouter, Depends, File, UploadFile, HTTPException
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.schemas.resume_schema import ResumeResponse
from app.services.resume_service import ResumeService

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

UPLOAD_FOLDER = "app/uploads"


@router.post(
    "/upload",
    response_model=ResumeResponse
)
async def upload_resume(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    if not file.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    filepath = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return ResumeService.save_resume(
        db=db,
        filename=file.filename,
        filepath=filepath
    )