function CareerMatches() {

  const careers = [
    "Software Engineer",
    "AI Engineer",
    "Cloud Engineer",
    "Data Engineer",
    "Backend Developer",
  ];

  return (
    <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-8">
        💼 Recommended Careers
      </h2>

      <div className="space-y-4">

        {careers.map((career) => (

          <div
            key={career}
            className="bg-slate-700 rounded-xl p-4 text-white"
          >

            {career}

          </div>

        ))}

      </div>

    </div>
  );
}

export default CareerMatches;