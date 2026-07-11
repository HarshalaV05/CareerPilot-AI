from ibm_watsonx_ai import Credentials
from ibm_watsonx_ai.foundation_models import ModelInference
from app.core.config import settings


class IBMClient:

    @staticmethod
    def get_model():

        credentials = Credentials(
            api_key=settings.IBM_API_KEY,
            url=settings.IBM_URL
        )

        model = ModelInference(
            model_id=settings.IBM_MODEL_ID,
            credentials=credentials,
            project_id=settings.IBM_PROJECT_ID,
            params={
                "max_new_tokens": 800,
                "temperature": 0.1,
                "top_p": 0.9
            }
        )

        return model