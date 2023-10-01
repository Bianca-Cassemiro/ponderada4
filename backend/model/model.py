from pydantic import BaseModel, Field, EmailStr

class User(BaseModel):
    email: EmailStr = Field(default=None)
    password: str = Field(default=None)