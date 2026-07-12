import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaBriefcase,
  FaUserTie,
  FaRobot,
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/",
    },
    {
      name: "Resume Analyzer",
      icon: <FaFileAlt />,
      path: "/resume",
    },
    {
      name: "Career Recommendation",
      icon: <FaBriefcase />,
      path: "/career",
    },
    {
      name: "Interview Prep",
      icon: <FaUserTie />,
      path: "/interview",
    },
  ];

  return (
    <div className="w-72 min-h-screen bg-slate-900 text-white shadow-2xl">

      {/* Logo */}
      <div className="flex items-center gap-3 p-6 border-b border-slate-700">
        <FaRobot className="text-4xl text-blue-500" />
        <div>
          <h1 className="text-2xl font-bold">CareerPilot AI</h1>
          <p className="text-sm text-slate-400">
            AI Career Assistant
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-6 px-4">

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 rounded-xl mb-3 transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`
            }
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.name}
            </span>
          </NavLink>
        ))}

      </div>
    </div>
  );
}

export default Sidebar;