JOB_MATCH_PROMPT = """
You are an ATS Resume Matching Expert.

Compare the resume with the given job description.

Return ONLY valid JSON.

{{
    "match_score": 0,
    "overall_fit": "",
    "matching_skills": [],
    "missing_skills": [],
    "strengths": [],
    "weaknesses": [],
    "recommended_resume_changes": [],
    "final_recommendation": ""
}}

Resume:

{resume}

Job Description:

{job_description}
"""