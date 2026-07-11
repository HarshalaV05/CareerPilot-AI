JOB_MATCH_PROMPT = """
You are an ATS Resume Matching Expert.

Compare the resume with the job description.

Return ONLY valid JSON.

{{
    "match_score": 0,
    "matching_skills": [],
    "missing_skills": [],
    "recommendations": []
}}

Resume:

{resume}

Job Description:

{job_description}
"""