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
                "decoding_method": "greedy",
                "max_new_tokens": 1200,
                "min_new_tokens": 100,
                "temperature": 0,
                "top_p": 1,
                "repetition_penalty": 1
            }
        )

        return model