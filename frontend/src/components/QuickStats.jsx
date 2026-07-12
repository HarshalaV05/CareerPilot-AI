import {
    FaChartLine,
    FaBriefcase,
    FaUserTie,
    FaFilePdf,
} from "react-icons/fa";

const stats = [

    {
        title: "ATS Score",
        value: "--",
        color: "bg-blue-600",
        icon: <FaChartLine />
    },

    {
        title: "Career",
        value: "--",
        color: "bg-yellow-500",
        icon: <FaBriefcase />
    },

    {
        title: "Interview",
        value: "--",
        color: "bg-purple-600",
        icon: <FaUserTie />
    },

    {
        title: "Resume",
        value: "Not Uploaded",
        color: "bg-red-500",
        icon: <FaFilePdf />
    }

];

function QuickStats() {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

            {stats.map((item) => (

                <div
                    key={item.title}
                    className="bg-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition"
                >

                    <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white`}>

                        {item.icon}

                    </div>

                    <h2 className="text-white text-3xl mt-6 font-bold">

                        {item.value}

                    </h2>

                    <p className="text-slate-400">

                        {item.title}

                    </p>

                </div>

            ))}

        </div>

    );

}

export default QuickStats;