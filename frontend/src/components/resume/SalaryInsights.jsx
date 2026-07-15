function SalaryInsights() {

  const salaries = [
    {
      role: "Software Engineer",
      salary: "₹8–12 LPA",
    },
    {
      role: "AI Engineer",
      salary: "₹10–18 LPA",
    },
    {
      role: "Cloud Engineer",
      salary: "₹9–16 LPA",
    },
  ];

  return (
    <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-8">
        💰 Salary Insights
      </h2>

      <div className="space-y-5">

        {salaries.map((item) => (

          <div
            key={item.role}
            className="flex justify-between bg-slate-700 rounded-xl p-5"
          >

            <span className="text-white">
              {item.role}
            </span>

            <span className="text-green-400 font-bold">
              {item.salary}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SalaryInsights;