import Layout from "../components/layout/Layout";
import Hero from "../components/dashboard/Hero";
import InsightsSection from "../components/dashboard/InsightsSection";
import LearningRoadmap from "../components/dashboard/LearningRoadmap";
import ActionsSection from "../components/dashboard/ActionsSection";

function Dashboard() {
  return (
    <Layout>

      <Hero />

      <InsightsSection />

      <LearningRoadmap />

      <ActionsSection />

    </Layout>
  );
}

export default Dashboard;