function SkillsSection({ title, skills }) {

    return (

        <div className="bg-slate-800 rounded-3xl p-8">

            <h2 className="text-white text-xl font-bold">

                {title}

            </h2>

            <div className="flex flex-wrap gap-3 mt-6">

                {skills?.length ? (

                    skills.map((skill,index)=>(

                        <span
                            key={index}
                            className="bg-blue-600 px-4 py-2 rounded-full text-white"
                        >

                            {skill}

                        </span>

                    ))

                ) : (

                    <p className="text-slate-400">

                        No data yet.

                    </p>

                )}

            </div>

        </div>

    );

}

export default SkillsSection;