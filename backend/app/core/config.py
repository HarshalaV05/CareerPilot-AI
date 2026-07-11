from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    """
    Application Configuration
    Reads values from the .env file.
    """

    # ==========================================
    # Application
    # ==========================================
    APP_NAME: str = "CareerPilot AI"
    APP_VERSION: str = "1.0.0"

    # ==========================================
    # Database
    # ==========================================
    DATABASE_URL: str = "sqlite:///careerpilot.db"

    # ==========================================
    # IBM watsonx.ai
    # ==========================================
    IBM_API_KEY: str = ""
    IBM_PROJECT_ID: str = ""
    IBM_URL: str = "https://au-syd.ml.cloud.ibm.com"
    IBM_MODEL_ID: str = ""
    IBM_REGION: str = "au-syd"

    # ==========================================
    # Security
    # ==========================================
    SECRET_KEY: str = ""
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # ==========================================
    # Load .env
    # ==========================================
    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


# Create a single settings object
settings = Settings()