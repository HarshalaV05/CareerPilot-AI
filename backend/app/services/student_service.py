from sqlalchemy.orm import Session

from app.models.student import Student
from app.schemas.student_schema import StudentCreate


class StudentService:

    @staticmethod
    def create_student(db: Session, student: StudentCreate):
        db_student = Student(
            name=student.name,
            college=student.college,
            branch=student.branch,
            year=student.year
        )

        db.add(db_student)
        db.commit()
        db.refresh(db_student)

        return db_student

    @staticmethod
    def get_students(db: Session):
        return db.query(Student).all()