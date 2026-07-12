import { useState } from "react";

import Layout from "../components/layout/Layout";

import UploadResume from "../components/resume/UploadResume";
import ATSScore from "../components/resume/ATSScore";
import SkillsSection from "../components/resume/SkillsSection";
import Summary from "../components/resume/Summary";
import Suggestions from "../components/resume/Suggestions";

function Resume() {

    const [analysis, setAnalysis] = useState(null);

    return (

        <Layout>

            <UploadResume
                onAnalysis={setAnalysis}
            />

            {analysis && (

                <div className="space-y-8 mt-10">

                    <ATSScore
                        score={analysis.ats_score}
                    />

                    <SkillsSection
                        title="Technical Skills"
                        skills={analysis.technical_skills}
                    />

                    <SkillsSection
                        title="Soft Skills"
                        skills={analysis.soft_skills}
                    />

                    <Summary
                        summary={analysis.resume_summary}
                    />

                    <Suggestions
                        suggestions={analysis.improvement_suggestions}
                    />

                </div>

            )}

        </Layout>

    );

}

export default Resume;