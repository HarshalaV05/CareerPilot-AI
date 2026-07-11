from sqlalchemy import Column, Integer, String, Text

from app.database.base import Base


class Resume(Base):
    __tablename__ = "resumes"

    id = Column(Integer, primary_key=True, index=True)

    file_name = Column(String, nullable=False)

    file_path = Column(String, nullable=False)

    extracted_text = Column(Text)

    upload_date = Column(String)

    # AI Analysis
    ats_score = Column(Integer)

    technical_skills = Column(Text)

    soft_skills = Column(Text)

    strengths = Column(Text)

    weaknesses = Column(Text)

    missing_skills = Column(Text)

    career_recommendation = Column(Text)

    recommended_job_roles = Column(Text)

    learning_roadmap = Column(Text)

    resume_summary = Column(Text)

    improvement_suggestions = Column(Text)