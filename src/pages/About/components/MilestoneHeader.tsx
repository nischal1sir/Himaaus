import React from "react";

export const MilestoneHeader: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-12 pb-6 md:pt-16 md:pb-8">
      {/* Accent bar and section category tag */}
      <div className="flex items-center gap-3 mb-2">
        <span className="w-10 h-[3px] bg-[#0084CA] rounded-full inline-block"></span>
        <span className="text-[#E59819] font-bold text-xs md:text-sm tracking-wider uppercase">
          OUR MILESTONE
        </span>
      </div>

      {/* Main Page Title */}
      <h1 className="text-[#0084CA] font-extrabold text-3xl md:text-4xl lg:text-[40px] tracking-tight leading-tight mb-4">
        Milestones That Define Our Excellence
      </h1>

      {/* Subtitle Description */}
      <p className="text-gray-600 text-sm md:text-base max-w-4xl leading-relaxed font-normal">
        From humble beginnings to industry leadership, trace our journey of growth, innovation, and commitment to transforming student lives worldwide.
      </p>
    </div>
  );
};

export default MilestoneHeader;
