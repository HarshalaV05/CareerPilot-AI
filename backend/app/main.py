from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import engine
from app.database.base import Base
from app.models.resume import Resume
from app.models.student import Student

from app.core.config import settings
from app.api.router import api_router

# Create database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app FIRST
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Enterprise Agentic Career Intelligence Platform"
)

# CORS
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://career-pilot-ai-olive.vercel.app",
    "https://career-pilot-ai-git-main-harshalavmarakala-7512s-projects.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routes
app.include_router(api_router)

# Root endpoint
@app.get("/", tags=["Root"])
async def root():
    return {
        "message": f"Welcome to {settings.APP_NAME}",
        "version": settings.APP_VERSION,
        "status": "Running"
    }

# Health endpoint
@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }