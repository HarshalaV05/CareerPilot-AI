function InsightsSection() {
  const analysis = JSON.parse(
    localStorage.getItem("careerpilot_analysis") || "null"
  );

  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-8">

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold text-white">
          Resume Insights
        </h2>

        {analysis ? (
          <div className="mt-6 space-y-4">

            <div className="flex justify-between">
              <span className="text-slate-400">Resume Status</span>
              <span className="text-emerald-400 font-semibold">
                Analyzed
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">ATS Analysis</span>
              <span className="text-blue-400">
                Completed
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">AI Insights</span>
              <span className="text-blue-400">
                Available
              </span>
            </div>

            <p className="text-slate-400 pt-4 border-t border-slate-800">
              Open the <strong>Resume Analyzer</strong> page to view the complete
              ATS score, extracted skills, strengths, weaknesses and AI suggestions.
            </p>

          </div>
        ) : (
          <p className="text-slate-400 mt-6">
            Upload and analyze your resume to unlock AI-powered insights.
          </p>
        )}

      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold text-white">
          Career Guidance
        </h2>

        {analysis ? (
          <div className="mt-6 space-y-4">

            <div className="flex justify-between">
              <span className="text-slate-400">
                Career Recommendation
              </span>

              <span className="text-emerald-400">
                Ready
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Learning Roadmap
              </span>

              <span className="text-blue-400">
                Generated
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Interview Preparation
              </span>

              <span className="text-blue-400">
                Available
              </span>
            </div>

            <p className="text-slate-400 pt-4 border-t border-slate-800">
              Visit the Career Recommendation and Interview Preparation pages
              to explore personalized AI-generated guidance.
            </p>

          </div>
        ) : (
          <p className="text-slate-400 mt-6">
            Analyze your resume to receive personalized career guidance.
          </p>
        )}

      </div>

    </div>
  );
}

export default InsightsSection;