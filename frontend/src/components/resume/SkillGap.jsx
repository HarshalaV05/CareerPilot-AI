function SkillGap() {

  const missing = [
    "Docker",
    "Kubernetes",
    "AWS",
    "CI/CD",
    "Linux",
  ];

  return (
    <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-8">
        📉 Skill Gap
      </h2>

      <div className="flex flex-wrap gap-4">

        {missing.map((skill) => (

          <span
            key={skill}
            className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>
  );
}

export default SkillGap;