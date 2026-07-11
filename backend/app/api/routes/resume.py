import os
import shutil

from fastapi import APIRouter, Depends, File, UploadFile, HTTPException
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.schemas.resume_schema import ResumeResponse
from app.services.resume_service import ResumeService
from app.utils.parser.resume_parser import ResumeParser
from app.ai.granite.granite_service import GraniteService

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

UPLOAD_FOLDER = "app/uploads"

# Create uploads folder if it doesn't exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post(
    "/upload",
    response_model=ResumeResponse
)
async def upload_resume(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    # Accept only PDF
    if not file.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    # Save PDF
    filepath = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Save in database
    return ResumeService.save_resume(
        db=db,
        filename=file.filename,
        filepath=filepath
    )


@router.post("/analyze")
async def analyze_resume(
    file: UploadFile = File(...)
):

    # Accept only PDF
    if not file.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    # Save uploaded PDF
    filepath = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract resume text
    resume_text = ResumeParser.extract_text(filepath)

    # Analyze using IBM Granite
    analysis = GraniteService.analyze_resume(
        resume_text
    )

    # Return analysis
    return {
        "filename": file.filename,
        "analysis": analysis
    }