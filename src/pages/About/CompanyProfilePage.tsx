import React from "react";
import OurValuesSection from "./components/OurValuesSection";
import StudentSuccessStoriesSection from "./components/StudentSuccessStoriesSection";
import LeadershipTeamSection from "./components/LeadershipTeamSection";
import MilestoneHeader from "./components/MilestoneHeader";
import MilestoneTimeline from "./components/MilestoneTimeline";
import FloatingWidgets from "./components/FloatingWidgets";
import CTASection from "../Home/whySection/whyChooseExplore/CTASection";

export const CompanyProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pt-20 overflow-x-hidden">
      {/* 1. Our Values (PRINCIPLE) Section */}
      <OurValuesSection />

      {/* 2. Student Success Stories (STORIES) Section */}
      <StudentSuccessStoriesSection />

      {/* 3. Leadership & Team (EXPERT PROFESSIONALS) + Stats Section */}
      <LeadershipTeamSection />

      {/* 4. Milestone Header (OUR MILESTONE) */}
      <MilestoneHeader />

      {/* 5. Interactive Milestone Timeline */}
      <MilestoneTimeline />

      {/* 6. Official Project Ready To Get Started CTA Section */}
      <CTASection />

      {/* 7. Floating Action Widgets */}
      <FloatingWidgets />
    </div>
  );
};

export default CompanyProfilePage;

