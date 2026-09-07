import React from "react";

export const MilestoneHeader: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-10 pb-4 md:pt-14 md:pb-6">
      {/* Accent bar and section category tag */}
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className="w-11 h-[3px] bg-[#0084CA] rounded-full inline-block"></span>
        <span className="text-[#FFB800] font-bold text-xs md:text-sm tracking-[0.15em] uppercase">
          OUR MILESTONE
        </span>
      </div>

      {/* Main Page Title */}
      <h1 className="text-[#0084CA] font-extrabold text-3xl md:text-4xl lg:text-[40px] tracking-tight leading-tight mb-3">
        Milestones That Define Our Excellence
      </h1>

      {/* Subtitle Description */}
      <p className="text-[#334155] text-sm md:text-[15px] max-w-5xl leading-relaxed font-normal">
        From humble beginnings to industry leadership, trace our journey of growth, innovation, and commitment to transforming student lives worldwide.
      </p>
    </div>
  );
};

export default MilestoneHeader;
