import React from "react";
import { milestoneData } from "../data/milestoneData";
import { MilestoneCard } from "./MilestoneCard";

export const MilestoneTimeline: React.FC = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-16">
      {/* Central Blue Vertical Timeline Line */}
      <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[3px] bg-[#0084CA] -translate-x-1/2 z-0" />

      {/* Timeline Items */}
      <div className="space-y-12 md:space-y-16 relative z-10">
        {milestoneData.map((item) => {
          const isRight = item.side === "right";

          return (
            <div
              key={item.id}
              className="relative flex flex-col md:flex-row items-center"
            >
              {/* Timeline Year Circle Node */}
              <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-13 h-13 md:w-15 md:h-15 rounded-full bg-[#0084CA] text-white flex items-center justify-center font-extrabold text-xs md:text-sm tracking-tight shadow-lg ring-4 ring-sky-100/90 z-20 border-2 border-white">
                {item.year}
              </div>

              {/* Card Container Container aligned Left or Right */}
              <div
                className={`w-full pl-16 md:pl-0 md:w-1/2 flex ${
                  isRight
                    ? "md:ml-auto md:pl-12 justify-start"
                    : "md:mr-auto md:pr-12 justify-start md:justify-end"
                }`}
              >
                <MilestoneCard milestone={item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MilestoneTimeline;
