function ResumeHealth() {

  const score = 91;

  return (
    <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-6">
        ❤️ Resume Health
      </h2>

      <h1 className="text-6xl font-bold text-green-400">
        {score}%
      </h1>

      <div className="w-full bg-slate-700 rounded-full h-5 mt-8">

        <div
          className="bg-green-500 h-5 rounded-full"
          style={{ width: `${score}%` }}
        />

      </div>

      <p className="text-slate-400 mt-6">

        Excellent resume with strong ATS compatibility.

      </p>

    </div>
  );
}

export default ResumeHealth;