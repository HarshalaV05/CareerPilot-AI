import { useNavigate } from "react-router-dom";
import {
  FaFileAlt,
  FaBriefcase,
  FaUserTie,
  FaArrowRight,
} from "react-icons/fa";

function ActionsSection() {
  const navigate = useNavigate();

  const analysis = JSON.parse(
    localStorage.getItem("careerpilot_analysis") || "null"
  );

  const actions = [
    {
      title: "Resume Analyzer",
      description: "Upload and analyze your resume",
      icon: <FaFileAlt />,
      path: "/resume",
    },
    {
      title: "Career Recommendation",
      description: analysis
        ? "View AI-generated career recommendations"
        : "Analyze your resume first",
      icon: <FaBriefcase />,
      path: "/career",
    },
    {
      title: "Interview Preparation",
      description: analysis
        ? "Generate AI interview questions"
        : "Prepare after resume analysis",
      icon: <FaUserTie />,
      path: "/interview",
    },
  ];

  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold text-white mb-6">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {actions.map((action) => (

          <button
            key={action.title}
            onClick={() => navigate(action.path)}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 text-left"
          >

            <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center text-blue-400 text-2xl">

              {action.icon}

            </div>

            <h3 className="text-white text-xl font-semibold mt-6">
              {action.title}
            </h3>

            <p className="text-slate-400 mt-3">
              {action.description}
            </p>

            <div className="flex items-center gap-2 mt-6 text-blue-400 font-medium">

              Open

              <FaArrowRight />

            </div>

          </button>

        ))}

      </div>

    </div>
  );
}

export default ActionsSection;