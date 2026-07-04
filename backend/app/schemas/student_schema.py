from pydantic import BaseModel


class StudentBase(BaseModel):
    name: str
    college: str
    branch: str
    year: str


class StudentCreate(StudentBase):
    pass


class StudentResponse(StudentBase):
    id: int

    class Config:
        from_attributes = True