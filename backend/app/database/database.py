from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base

from app.core.config import settings

# SQLite Engine
engine = create_engine(
    settings.DATABASE_URL,
    connect_args={"check_same_thread": False}
)

# Base class for all database models
Base = declarative_base()