from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "CareerPilot AI"
    APP_VERSION: str = "1.0.0"

    IBM_API_KEY: str = ""
    IBM_PROJECT_ID: str = ""
    IBM_URL: str = ""
    IBM_MODEL_ID: str = ""

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


settings = Settings()