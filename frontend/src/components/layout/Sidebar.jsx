import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaChartLine,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <FaHome />,
    },
    {
      title: "Resume Analyzer",
      path: "/resume",
      icon: <FaFileAlt />,
    },
    {
      title: "Career Recommendation",
      path: "/career",
      icon: <FaChartLine />,
    },
    {
      title: "Job Explorer",
      path: "/jobs",
      icon: <FaBriefcase />,
    },
    {
      title: "Interview Preparation",
      path: "/interview",
      icon: <FaUserTie />,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 flex flex-col">

      <div className="p-8 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-white">
          CareerPilot AI
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          IBM Granite Powered
        </p>

      </div>

      <nav className="flex-1 px-4 py-6">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-xl mb-3 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.title}</span>
          </NavLink>
        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;