function HowItWorks() {

    const steps = [

        "Upload Resume",

        "AI Resume Analysis",

        "Career Recommendation",

        "Interview Preparation"

    ];

    return (

        <div className="bg-slate-800 rounded-3xl mt-10 p-8 shadow-xl">

            <h2 className="text-white text-2xl font-bold">

                How CareerPilot Works

            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-8">

                {steps.map((step,index)=>(

                    <div
                        key={index}
                        className="bg-slate-900 rounded-2xl p-6 text-center hover:bg-slate-700 transition"
                    >

                        <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">

                            {index+1}

                        </div>

                        <h3 className="text-white mt-6">

                            {step}

                        </h3>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default HowItWorks;