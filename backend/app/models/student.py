from sqlalchemy import Column, Integer, String

from app.database.base import Base


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    college = Column(String)
    branch = Column(String)
    year = Column(String)