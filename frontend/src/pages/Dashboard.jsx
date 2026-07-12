import Layout from "../components/layout/Layout";
import {
  FaFileAlt,
  FaBriefcase,
  FaUserTie,
  FaArrowRight,
} from "react-icons/fa";

function Dashboard() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-10 text-white shadow-xl">

        <h1 className="text-5xl font-bold">
          Welcome to CareerPilot AI 🚀
        </h1>

        <p className="mt-4 text-lg text-blue-100 max-w-3xl">
          Your intelligent career companion powered by IBM watsonx.ai.
          Analyze resumes, discover career opportunities, and prepare for
          interviews with AI assistance.
        </p>

        <div className="mt-8 flex gap-4">

          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition">
            Analyze Resume
          </button>

          <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
            Explore Careers
          </button>

        </div>
      </div>

      {/* Feature Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

        {/* Resume */}

        <div className="bg-slate-800 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">

          <FaFileAlt className="text-5xl text-blue-500 mb-6" />

          <h2 className="text-2xl text-white font-bold">
            Resume Analyzer
          </h2>

          <p className="text-slate-400 mt-4">
            Upload your resume and receive an AI-powered ATS score,
            technical skill extraction, strengths, weaknesses and
            improvement suggestions.
          </p>

          <button className="mt-8 flex items-center gap-2 text-blue-400 hover:text-blue-300">

            Analyze Resume

            <FaArrowRight />

          </button>

        </div>

        {/* Career */}

        <div className="bg-slate-800 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">

          <FaBriefcase className="text-5xl text-yellow-400 mb-6" />

          <h2 className="text-2xl text-white font-bold">
            Career Recommendation
          </h2>

          <p className="text-slate-400 mt-4">
            Discover career paths based on your skills, certifications,
            projects and AI-powered recommendations.
          </p>

          <button className="mt-8 flex items-center gap-2 text-yellow-400 hover:text-yellow-300">

            Explore Careers

            <FaArrowRight />

          </button>

        </div>

        {/* Interview */}

        <div className="bg-slate-800 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">

          <FaUserTie className="text-5xl text-purple-500 mb-6" />

          <h2 className="text-2xl text-white font-bold">
            Interview Preparation
          </h2>

          <p className="text-slate-400 mt-4">
            Generate HR, technical and project-based interview questions
            instantly using IBM Granite AI.
          </p>

          <button className="mt-8 flex items-center gap-2 text-purple-400 hover:text-purple-300">

            Start Practice

            <FaArrowRight />

          </button>

        </div>

      </div>

      {/* Progress */}

      <div className="bg-slate-800 rounded-3xl mt-10 p-8 shadow-xl">

        <h2 className="text-2xl font-bold text-white">
          Career Journey
        </h2>

        <div className="mt-8 space-y-6">

          <div>
            <div className="flex justify-between text-white">
              <span>Resume Upload</span>
              <span>0%</span>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-3 mt-2">

              <div className="bg-blue-500 h-3 rounded-full w-0"></div>

            </div>
          </div>

          <div>
            <div className="flex justify-between text-white">
              <span>Career Recommendation</span>
              <span>0%</span>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-3 mt-2">

              <div className="bg-yellow-400 h-3 rounded-full w-0"></div>

            </div>
          </div>

          <div>
            <div className="flex justify-between text-white">
              <span>Interview Preparation</span>
              <span>0%</span>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-3 mt-2">

              <div className="bg-purple-500 h-3 rounded-full w-0"></div>

            </div>
          </div>

        </div>

      </div>

    </Layout>
  );
}

export default Dashboard;