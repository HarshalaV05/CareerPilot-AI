import {
    FaRobot
} from "react-icons/fa";

function RecentActivity() {

    return (

        <div className="bg-slate-800 rounded-3xl mt-10 p-8 shadow-xl">

            <div className="flex items-center gap-4">

                <FaRobot className="text-blue-500 text-3xl"/>

                <div>

                    <h2 className="text-white text-2xl font-bold">

                        Recent AI Activity

                    </h2>

                    <p className="text-slate-400">

                        Your AI interactions will appear here.

                    </p>

                </div>

            </div>

            <div className="border border-dashed border-slate-600 rounded-2xl mt-8 p-10 text-center">

                <h3 className="text-white text-xl">

                    No activity yet

                </h3>

                <p className="text-slate-500 mt-2">

                    Upload your first resume to get started.

                </p>

            </div>

        </div>

    );

}

export default RecentActivity;