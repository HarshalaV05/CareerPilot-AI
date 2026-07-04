import os
from datetime import datetime

from sqlalchemy.orm import Session

from app.models.resume import Resume
from app.utils.parser.resume_parser import ResumeParser


class ResumeService:

    @staticmethod
    def save_resume(
        db: Session,
        filename: str,
        filepath: str
    ):

        extracted_text = ResumeParser.extract_text(filepath)

        resume = Resume(
            file_name=filename,
            file_path=filepath,
            extracted_text=extracted_text,
            upload_date=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        )

        db.add(resume)
        db.commit()
        db.refresh(resume)

        return resume