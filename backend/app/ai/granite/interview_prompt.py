INTERVIEW_PROMPT = """
You are an experienced Technical Interviewer.

Generate interview questions based on the given job role.

Return ONLY valid JSON.

{{
    "technical_questions": [],
    "hr_questions": [],
    "coding_questions": [],
    "tips": []
}}

Role:

{role}
"""