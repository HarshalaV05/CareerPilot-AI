import Layout from "../components/layout/Layout";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBuilding,
  FaMoneyBillWave,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Jobs() {
  const jobs = [
    {
      company: "IBM",
      role: "Software Engineer",
      location: "Bangalore",
      salary: "₹8 - 12 LPA",
      skills: "Python • SQL • Git • AI",
      match: "94%",
    },
    {
      company: "Accenture",
      role: "Associate Software Engineer",
      location: "Bangalore",
      salary: "₹6 - 10 LPA",
      skills: "Java • SQL • React",
      match: "91%",
    },
    {
      company: "Infosys",
      role: "Systems Engineer",
      location: "Mysore",
      salary: "₹5 - 8 LPA",
      skills: "Python • AWS • Linux",
      match: "88%",
    },
    {
      company: "Capgemini",
      role: "Full Stack Developer",
      location: "Hyderabad",
      salary: "₹7 - 11 LPA",
      skills: "React • Node • MongoDB",
      match: "90%",
    },
  ];

  return (
    <Layout>

      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-10 text-white shadow-xl">

        <h1 className="text-5xl font-bold">
          💼 AI Job Explorer
        </h1>

        <p className="mt-4 text-blue-100 text-lg">
          Discover jobs recommended according to your resume,
          technical skills and AI career analysis.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-8">

        <input
          placeholder="Search Role..."
          className="bg-slate-800 rounded-xl p-4 text-white outline-none"
        />

        <input
          placeholder="Location..."
          className="bg-slate-800 rounded-xl p-4 text-white outline-none"
        />

        <button className="bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-700 transition">

          <FaSearch className="inline mr-2" />

          Search Jobs

        </button>

      </div>

      <div className="space-y-6 mt-10">

        {jobs.map((job, index) => (

          <div
            key={index}
            className="bg-slate-800 rounded-3xl p-8 shadow-xl hover:scale-[1.01] transition"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="text-2xl font-bold text-white">
                  {job.role}
                </h2>

                <div className="flex gap-6 mt-5 text-slate-300">

                  <span>

                    <FaBuilding className="inline mr-2" />

                    {job.company}

                  </span>

                  <span>

                    <FaMapMarkerAlt className="inline mr-2" />

                    {job.location}

                  </span>

                  <span>

                    <FaMoneyBillWave className="inline mr-2" />

                    {job.salary}

                  </span>

                </div>

                <p className="mt-6 text-slate-400">

                  Skills Required

                  <br />

                  {job.skills}

                </p>

              </div>

              <div className="text-right">

                <div className="bg-green-500 rounded-full px-5 py-2 text-white font-bold">

                  {job.match} Match

                </div>

                <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white">

                  Apply Now

                  <FaExternalLinkAlt className="inline ml-2" />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </Layout>
  );
}

export default Jobs;