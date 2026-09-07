import React from "react";
import MilestoneHeader from "./components/MilestoneHeader";
import MilestoneTimeline from "./components/MilestoneTimeline";
import ReadyToStartSection from "./components/ReadyToStartSection";
import FloatingWidgets from "./components/FloatingWidgets";

export const CompanyProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pt-20 overflow-x-hidden">
      {/* 1. Header with Title & Description */}
      <MilestoneHeader />

      {/* 2. Interactive Milestone Timeline */}
      <MilestoneTimeline />

      {/* 3. Ready To Get Started CTA Section */}
      <ReadyToStartSection />

      {/* 4. Head Office Banner & Floating Chat / Scroll Widgets */}
      <FloatingWidgets />
    </div>
  );
};

export default CompanyProfilePage;
