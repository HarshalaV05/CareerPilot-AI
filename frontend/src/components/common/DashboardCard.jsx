import React from "react";

function DashboardCard({
  title,
  value,
  description,
  icon,
  iconColor = "text-blue-500",
}) {
  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-300">

      <div className="flex justify-between items-center">

        <div>

          <h3 className="text-slate-400 uppercase text-sm">
            {title}
          </h3>

          <h1 className="text-white text-3xl font-bold mt-2">
            {value}
          </h1>

          <p className="text-slate-400 mt-2">
            {description}
          </p>

        </div>

        <div className={`text-5xl ${iconColor}`}>
          {icon}
        </div>

      </div>

    </div>
  );
}

export default DashboardCard;