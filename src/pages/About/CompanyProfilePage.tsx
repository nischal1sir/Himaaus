import React from "react";
import AboutHero from "./components/AboutHero";
import GuidingPrinciplesSection from "./components/GuidingPrinciplesSection";
import AboutUsOverviewSection from "./components/AboutUsOverviewSection";
import OurValuesSection from "./components/OurValuesSection";
import StudentSuccessStoriesSection from "./components/StudentSuccessStoriesSection";
import LeadershipTeamSection from "./components/LeadershipTeamSection";
import MilestoneHeader from "./components/MilestoneHeader";
import MilestoneTimeline from "./components/MilestoneTimeline";
import CTASection from "../Home/whySection/whyChooseExplore/CTASection";

export const CompanyProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* 1. Hero Banner */}
      <AboutHero />

      {/* 2. Our Guiding Principles Section */}
      <GuidingPrinciplesSection />

      {/* 3. About Us / Who We Are Section */}
      <AboutUsOverviewSection />

      {/* 4. Our Values (PRINCIPLE) Section */}
      <OurValuesSection />

      {/* 5. Student Success Stories (STORIES) Section */}
      <StudentSuccessStoriesSection />

      {/* 6. Leadership & Team (EXPERT PROFESSIONALS) + 4 Stats Cards */}
      <LeadershipTeamSection />

      {/* 7. Milestone Header (OUR MILESTONE) */}
      <MilestoneHeader />

      {/* 8. Interactive Milestone Timeline */}
      <MilestoneTimeline />

      {/* 9. Official Project Ready To Get Started CTA Section */}
      <CTASection />
    </div>
  );
};

export default CompanyProfilePage;
