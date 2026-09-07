import React from "react";
import MilestoneHeader from "./components/MilestoneHeader";
import MilestoneTimeline from "./components/MilestoneTimeline";
import CTASection from "../Home/whySection/whyChooseExplore/CTASection";

export const CompanyProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pt-20 overflow-x-hidden">
      {/* 1. Header with Title & Description */}
      <MilestoneHeader />

      {/* 2. Interactive Milestone Timeline */}
      <MilestoneTimeline />

      {/* 3. Official Project Ready To Get Started CTA Section */}
      <CTASection />
    </div>
  );
};

export default CompanyProfilePage;
