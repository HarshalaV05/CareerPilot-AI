from pydantic import BaseModel


class CareerRequest(BaseModel):
    profile: str