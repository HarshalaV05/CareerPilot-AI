function Summary({ summary }) {

    return (

        <div className="bg-slate-800 rounded-3xl p-8">

            <h2 className="text-white text-xl font-bold">

                Resume Summary

            </h2>

            <p className="text-slate-300 mt-6">

                {summary || "No summary available."}

            </p>

        </div>

    );

}

export default Summary;