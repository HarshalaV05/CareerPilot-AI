import { useState } from "react";
import api from "../../services/api";

function UploadResume({ onAnalysis }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      setFile(null);
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      alert("Please upload a PDF resume.");
      return;
    }

    setFile(selectedFile);
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please select a PDF resume.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post(
        "/resume/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const analysis =
        response.data.analysis || response.data;

      console.log("Resume Analysis:", analysis);

      localStorage.setItem(
        "careerpilot_analysis",
        JSON.stringify(analysis)
      );

      // IMPORTANT: Update Resume page
      onAnalysis(analysis);

      alert("Resume analyzed successfully!");

    } catch (error) {
      console.error(error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Resume analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-white mb-2">
        Resume Analyzer
      </h2>

      <p className="text-slate-400 mb-8">
        Upload your resume to receive AI-powered ATS analysis and career insights.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-6">

        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="
            block
            text-white
            file:bg-blue-600
            file:text-white
            file:border-0
            file:px-5
            file:py-3
            file:rounded-xl
            file:cursor-pointer
            hover:file:bg-blue-700
          "
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="
            bg-blue-600
            hover:bg-blue-700
            disabled:opacity-50
            text-white
            px-8
            py-3
            rounded-xl
            transition
          "
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

      </div>

      <div className="mt-6">

        {file ? (
          <p className="text-emerald-400">
            📄 {file.name}
          </p>
        ) : (
          <p className="text-slate-500">
            No resume selected.
          </p>
        )}

      </div>

    </div>
  );
}

export default UploadResume;