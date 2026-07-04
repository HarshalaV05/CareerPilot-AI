import fitz


class ResumeParser:

    @staticmethod
    def extract_text(pdf_path: str) -> str:
        """
        Extract text from a PDF using PyMuPDF.
        """

        document = fitz.open(pdf_path)

        text = ""

        for page in document:
            text += page.get_text()

        document.close()

        return text.strip()