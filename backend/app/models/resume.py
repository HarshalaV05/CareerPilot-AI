from sqlalchemy import Column, Integer, String, Text

from app.database.base import Base


class Resume(Base):
    __tablename__ = "resumes"

    id = Column(Integer, primary_key=True, index=True)

    file_name = Column(String, nullable=False)

    file_path = Column(String, nullable=False)

    extracted_text = Column(Text)

    upload_date = Column(String)