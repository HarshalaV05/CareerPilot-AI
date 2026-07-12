function ATSScore({ score }) {

    return (

        <div className="bg-slate-800 rounded-3xl p-8">

            <h2 className="text-white text-xl font-bold">
                ATS Score
            </h2>

            <h1 className="text-6xl text-blue-400 font-bold mt-6">

                {score ?? "--"}

            </h1>

        </div>

    );

}

export default ATSScore;