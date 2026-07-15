import { useState } from "react";

import Layout from "../components/layout/Layout";

import UploadResume from "../components/resume/UploadResume";
import ATSScore from "../components/resume/ATSScore";
import SkillsSection from "../components/resume/SkillsSection";
import Summary from "../components/resume/Summary";
import Suggestions from "../components/resume/Suggestions";

import ResumeMatch from "../components/resume/ResumeMatch";
import SkillGap from "../components/resume/SkillGap";
import SalaryInsights from "../components/resume/SalaryInsights";
import ResumeHealth from "../components/resume/ResumeHealth";
import CareerMatches from "../components/resume/CareerMatches";

function Resume() {
  const [analysis, setAnalysis] = useState(null);

  return (
    <Layout>

      <UploadResume
        onAnalysis={setAnalysis}
      />

      {analysis && (

        <div className="space-y-8 mt-10">

          {/* Top Statistics */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <ATSScore
              score={analysis.ats_score}
            />

            <ResumeHealth />

          </div>

          {/* Skills */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <SkillsSection
              title="Technical Skills"
              skills={analysis.technical_skills}
            />

            <SkillsSection
              title="Soft Skills"
              skills={analysis.soft_skills}
            />

          </div>

          {/* AI Insights */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <ResumeMatch />

            <CareerMatches />

          </div>

          {/* Salary + Skill Gap */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <SalaryInsights />

            <SkillGap />

          </div>

          {/* Summary */}

          <Summary
            summary={analysis.resume_summary}
          />

          {/* Suggestions */}

          <Suggestions
            suggestions={analysis.improvement_suggestions}
          />

        </div>

      )}

    </Layout>
  );
}

export default Resume;