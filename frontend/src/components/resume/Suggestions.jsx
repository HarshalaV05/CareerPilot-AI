function Suggestions({ suggestions }) {

    return (

        <div className="bg-slate-800 rounded-3xl p-8">

            <h2 className="text-white text-xl font-bold">

                Improvement Suggestions

            </h2>

            <ul className="mt-6 list-disc list-inside text-slate-300">

                {suggestions?.length ? (

                    suggestions.map((item,index)=>(

                        <li key={index}>{item}</li>

                    ))

                ) : (

                    <li>No suggestions yet.</li>

                )}

            </ul>

        </div>

    );

}

export default Suggestions;