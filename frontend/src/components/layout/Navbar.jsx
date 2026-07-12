import { FaBell, FaUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const pageInfo = {
    "/": {
      title: "Dashboard",
      subtitle: "Welcome back! Manage your career journey here.",
    },
    "/resume": {
      title: "Resume Analyzer",
      subtitle: "Upload and analyze your resume using IBM Granite AI.",
    },
    "/career": {
      title: "Career Recommendation",
      subtitle: "Discover AI-powered career paths tailored for you.",
    },
    "/interview": {
      title: "Interview Preparation",
      subtitle: "Practice AI-generated interview questions.",
    },
  };

  const currentPage =
    pageInfo[location.pathname] || {
      title: "CareerPilot AI",
      subtitle: "AI Powered Career Guidance Platform",
    };

  return (
    <header className="h-20 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-8">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          {currentPage.title}
        </h1>

        <p className="text-slate-400">
          {currentPage.subtitle}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        <button className="relative text-slate-300 hover:text-blue-500 transition">
          <FaBell size={22} />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <FaUserCircle
          size={40}
          className="text-blue-500"
        />

      </div>

    </header>
  );
}

export default Navbar;