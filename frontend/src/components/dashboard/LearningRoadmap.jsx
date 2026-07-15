function LearningRoadmap() {
  const analysis = JSON.parse(
    localStorage.getItem("careerpilot_analysis") || "null"
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mt-8">

      <h2 className="text-2xl font-bold text-white">
        AI Learning Roadmap
      </h2>

      {analysis ? (
        <div className="mt-6">

          <p className="text-slate-300">
            A personalized learning roadmap has been generated based on your
            resume analysis.
          </p>

          <p className="text-slate-400 mt-4">
            Open the Career Recommendation module to view your complete
            learning roadmap and recommended certifications.
          </p>

        </div>
      ) : (
        <p className="text-slate-400 mt-6">
          Upload your resume to generate a personalized learning roadmap.
        </p>
      )}

    </div>
  );
}

export default LearningRoadmap;