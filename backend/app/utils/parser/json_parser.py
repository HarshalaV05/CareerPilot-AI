import json
import re


class JSONParser:

    @staticmethod
    def parse(response: str):

        # Remove markdown code fences
        response = response.replace("```json", "")
        response = response.replace("```", "")

        # Extract first JSON object
        match = re.search(r"\{.*\}", response, re.DOTALL)

        if match:
            try:
                return json.loads(match.group())
            except json.JSONDecodeError:
                pass

        return {
            "raw_response": response
        }