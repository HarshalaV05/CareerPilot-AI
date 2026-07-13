from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import engine
from app.database.base import Base
from app.models.resume import Resume
from app.models.student import Student

from app.core.config import settings
from app.api.router import api_router

# ---------------------------------------------------
# Create Database Tables
# ---------------------------------------------------

Base.metadata.create_all(bind=engine)

# ---------------------------------------------------
# Create FastAPI App
# ---------------------------------------------------

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Enterprise Agentic Career Intelligence Platform"
)

# ---------------------------------------------------
# CORS Configuration
# ---------------------------------------------------

app.add_middleware(
    CORSMiddleware,

    # Local Development
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],

    # Allow ALL Vercel deployments
    allow_origin_regex=r"https://.*\.vercel\.app",

    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------
# Register API Routes
# ---------------------------------------------------

app.include_router(api_router)

# ---------------------------------------------------
# Root Endpoint
# ---------------------------------------------------

@app.get("/", tags=["Root"])
async def root():
    return {
        "message": f"Welcome to {settings.APP_NAME}",
        "version": settings.APP_VERSION,
        "status": "Running"
    }

# ---------------------------------------------------
# Health Check
# ---------------------------------------------------

@app.get("/health", tags=["Health"])
async def health():
    return {
        "status": "healthy"
    }