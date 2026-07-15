function ResumeMatch() {

  const analysis = JSON.parse(
    localStorage.getItem("careerpilot_analysis") || "null"
  );

  if (!analysis) {
    return (
      <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">

        <h2 className="text-2xl font-bold text-white mb-6">
          🎯 Resume Match
        </h2>

        <p className="text-slate-400">
          Upload and analyze your resume to view matching job roles.
        </p>

      </div>
    );
  }

  const roles = analysis.recommended_job_roles || [];

  return (
    <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-8">
        🎯 Resume Match
      </h2>

      <div className="space-y-6">

        {roles.length > 0 ? (

          roles.map((role, index) => {

            const match = Math.max(
              70,
              analysis.ats_score - index * 5
            );

            return (

              <div key={role}>

                <div className="flex justify-between text-white mb-2">

                  <span>{role}</span>

                  <span>{match}%</span>

                </div>

                <div className="w-full bg-slate-700 rounded-full h-3">

                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{
                      width: `${match}%`,
                    }}
                  />

                </div>

              </div>

            );

          })

        ) : (

          <p className="text-slate-400">
            No matching roles available.
          </p>

        )}

      </div>

    </div>
  );
}

export default ResumeMatch;