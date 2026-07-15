import { Link } from "react-router-dom";

function Hero() {
  const analysis = JSON.parse(
    localStorage.getItem("careerpilot_analysis") || "null"
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-blue-400 text-sm font-semibold uppercase">
            IBM Granite Powered
          </p>

          <h1 className="text-4xl font-bold text-white mt-3">
            CareerPilot AI
          </h1>

          <p className="text-slate-400 mt-4 max-w-3xl">
            Upload your resume to unlock AI-powered ATS analysis,
            career recommendations and interview preparation.
          </p>

        </div>

        {!analysis && (
          <Link
            to="/resume"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            Analyze Resume
          </Link>
        )}

      </div>

    </div>
  );
}

export default Hero;