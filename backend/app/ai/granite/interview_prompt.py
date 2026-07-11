INTERVIEW_PROMPT = """
You are an expert technical interviewer.

Generate interview questions for the given job role.

Return ONLY valid JSON.

{{
    "hr_questions": [],
    "technical_questions": [],
    "project_questions": [],
    "interview_tips": []
}}

Job Role:

{role}
"""