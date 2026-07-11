from app.ai.granite.ibm_client import IBMClient
from app.ai.granite.prompts import RESUME_ANALYSIS_PROMPT
from app.ai.granite.career_prompt import CAREER_PROMPT
from app.ai.granite.job_prompt import JOB_MATCH_PROMPT
from app.ai.granite.interview_prompt import INTERVIEW_PROMPT

from app.utils.parser.json_parser import JSONParser


class GraniteService:

    @staticmethod
    def analyze_resume(resume_text: str):

        model = IBMClient.get_model()

        prompt = RESUME_ANALYSIS_PROMPT.format(
            resume=resume_text
        )

        response = model.generate_text(
            prompt=prompt
        )

        print("\n========== IBM RESPONSE ==========\n")
        print(response)
        print("\n==================================\n")

        analysis = JSONParser.parse(response)

        return analysis

    @staticmethod
    def recommend_career(profile: str):

        model = IBMClient.get_model()

        prompt = CAREER_PROMPT.format(
            profile=profile
        )

        response = model.generate_text(
            prompt=prompt
        )

        return JSONParser.parse(response)

    @staticmethod
    def match_resume(resume_text: str, job_description: str):

        model = IBMClient.get_model()

        prompt = JOB_MATCH_PROMPT.format(
            resume=resume_text,
            job_description=job_description
        )

        response = model.generate_text(
            prompt=prompt
        )

        return JSONParser.parse(response)
    @staticmethod
    def generate_interview_questions(role: str):

        model = IBMClient.get_model()

        prompt = INTERVIEW_PROMPT.format(
        role=role
     )

        response = model.generate_text(
            prompt=prompt
       )

        return JSONParser.parse(response)