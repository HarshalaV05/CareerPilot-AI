from pydantic import BaseModel
from typing import Optional


class ResumeResponse(BaseModel):
    id: int
    file_name: str
    file_path: str
    extracted_text: Optional[str] = None
    upload_date: str

    class Config:
        from_attributes = True