import { useState } from "react";
import api from "../../services/api";

function UploadResume({ onAnalysis }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Select PDF
  const handleFileChange = (event) => {
    console.log("File input changed");

    const selectedFile = event.target.files?.[0];

    console.log("Selected File:", selectedFile);

    if (!selectedFile) {
      setFile(null);
      alert("No file selected.");
      return;
    }

    setFile(selectedFile);
    alert(`Selected: ${selectedFile.name}`);
  };

  // Analyze Resume
  const handleAnalyze = async () => {
    console.log("Current File:", file);

    if (!file) {
      alert("Please choose a PDF first.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post("/resume/analyze", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Resume Response:", response.data);

      // Handles both response formats
      if (response.data.analysis) {
        onAnalysis(response.data.analysis);
      } else {
        onAnalysis(response.data);
      }

      alert("Resume analyzed successfully!");

    } catch (error) {
      console.error("Upload Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);
      }

      alert("Resume analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-3xl p-8 shadow-lg">

      <h2 className="text-3xl font-bold text-white mb-6">
        Upload Resume
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-6">

        <input
          type="file"
          accept="application/pdf,.pdf"
          onChange={handleFileChange}
          className="block text-white
                     file:bg-blue-600
                     file:text-white
                     file:border-0
                     file:px-5
                     file:py-3
                     file:rounded-xl
                     file:cursor-pointer
                     hover:file:bg-blue-700"
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-8 py-3 rounded-xl transition"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

      </div>

      <div className="mt-6">

        {file ? (
          <p className="text-green-400">
            📄 Selected File: <strong>{file.name}</strong>
          </p>
        ) : (
          <p className="text-slate-400">
            No file selected.
          </p>
        )}

      </div>

    </div>
  );
}

export default UploadResume;