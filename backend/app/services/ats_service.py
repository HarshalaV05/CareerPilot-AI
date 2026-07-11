import re


class ATSService:

    @staticmethod
    def calculate_score(text: str):

        score = 0

        text = text.lower()

        # Contact Information
        if re.search(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text):
            score += 10

        if re.search(r"\d{10}", text):
            score += 10

        # Resume Sections
        sections = [
            "education",
            "experience",
            "skills",
            "projects",
            "certifications",
            "objective",
            "summary"
        ]

        for section in sections:
            if section in text:
                score += 8

        # Length
        words = len(text.split())

        if words >= 300:
            score += 10

        # Cap score at 100
        return min(score, 100)