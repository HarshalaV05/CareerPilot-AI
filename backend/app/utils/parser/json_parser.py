import json
import re


class JSONParser:

    @staticmethod
    def parse(response: str):

        response = response.replace("```json", "")
        response = response.replace("```", "")
        response = response.strip()

        decoder = json.JSONDecoder()

        start = response.find("{")

        while start != -1:
            try:
                obj, end = decoder.raw_decode(response[start:])
                return obj
            except json.JSONDecodeError:
                start = response.find("{", start + 1)

        return {
            "raw_response": response
        }