import { useState } from "react";
import api from "../services/api";

function Interview() {
  const [role, setRole] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateQuestions = async () => {
    if (!role.trim()) {
      alert("Please enter a job role.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/interview/generate", {
        role,
      });

      console.log(response.data);

      setResult(response.data);

    } catch (error) {
      console.error(error);
      alert("Failed to generate interview questions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-2">
        Interview Preparation
      </h1>

      <p className="text-gray-400 mb-8">
        Generate AI-powered interview questions for your desired role.
      </p>

      <div className="bg-slate-800 rounded-2xl p-8">

        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Backend Developer"
          className="w-full p-4 rounded-xl bg-slate-700 text-white"
        />

        <button
          onClick={generateQuestions}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          {loading ? "Generating..." : "Generate Questions"}
        </button>

      </div>

      {result && (

        <div className="mt-8 space-y-8">

          {/* HR Questions */}

          <div className="bg-slate-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold text-blue-400 mb-5">
              HR Questions
            </h2>

            {result.hr_questions?.map((q, index) => (
              <div
                key={index}
                className="bg-slate-700 rounded-xl p-4 mb-3 text-white"
              >
                <strong>Q{index + 1}.</strong> {q}
              </div>
            ))}

          </div>

          {/* Technical Questions */}

          <div className="bg-slate-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold text-green-400 mb-5">
              Technical Questions
            </h2>

            {result.technical_questions?.map((q, index) => (
              <div
                key={index}
                className="bg-slate-700 rounded-xl p-4 mb-3 text-white"
              >
                <strong>Q{index + 1}.</strong> {q}
              </div>
            ))}

          </div>

          {/* Project Questions */}

          <div className="bg-slate-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold text-purple-400 mb-5">
              Project Questions
            </h2>

            {result.project_questions?.map((q, index) => (
              <div
                key={index}
                className="bg-slate-700 rounded-xl p-4 mb-3 text-white"
              >
                <strong>Q{index + 1}.</strong> {q}
              </div>
            ))}

          </div>

          {/* Interview Tips */}

          <div className="bg-slate-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold text-yellow-400 mb-5">
              Interview Tips
            </h2>

            <ul className="list-disc ml-6 text-white space-y-2">

              {result.interview_tips?.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}

            </ul>

          </div>

        </div>

      )}

    </div>
  );
}

export default Interview;