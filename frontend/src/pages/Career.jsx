import { useState } from "react";
import api from "../services/api";

function Career() {
  const [profile, setProfile] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRecommend = async () => {
    if (!profile.trim()) {
      alert("Please enter your profile.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/career/recommend", {
        profile,
      });

      setResult(response.data);

    } catch (err) {
      console.error(err);
      alert("Career recommendation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-2">
        Career Recommendation
      </h1>

      <p className="text-gray-500 mb-8">
        Discover your ideal career path using IBM Granite AI.
      </p>

      <div className="bg-slate-800 rounded-3xl p-8">

        <textarea
          rows={6}
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder="Describe your education, skills, certifications and interests..."
          className="w-full rounded-xl p-4 bg-slate-700 text-white"
        />

        <button
          onClick={handleRecommend}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          {loading ? "Generating..." : "Recommend Career"}
        </button>

      </div>

      {result && (

        <div className="mt-8 space-y-6">

          <div className="bg-slate-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold text-white">
              {result.recommended_career}
            </h2>

            <p className="text-green-400 mt-2">
              Salary: {result.salary_range}
            </p>

          </div>

          <div className="bg-slate-800 rounded-2xl p-6">

            <h3 className="text-xl text-white font-bold mb-4">
              Required Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              {result.required_skills?.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-600 px-4 py-2 rounded-full text-white"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          <div className="bg-slate-800 rounded-2xl p-6">

            <h3 className="text-xl text-white font-bold mb-4">
              Certifications
            </h3>

            <ul className="list-disc ml-6 text-white">

              {result.certifications?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}

            </ul>

          </div>

          <div className="bg-slate-800 rounded-2xl p-6">

            <h3 className="text-xl text-white font-bold mb-4">
              Suggested Projects
            </h3>

            <ul className="list-disc ml-6 text-white">

              {result.projects?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}

            </ul>

          </div>

          <div className="bg-slate-800 rounded-2xl p-6">

            <h3 className="text-xl text-white font-bold mb-4">
              Learning Roadmap
            </h3>

            <ul className="list-disc ml-6 text-white">

              {result.roadmap?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}

            </ul>

          </div>

        </div>

      )}

    </div>
  );
}

export default Career;