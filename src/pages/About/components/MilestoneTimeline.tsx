import React, { useState } from "react";
import { milestoneData } from "../data/milestoneData";
import { MilestoneCard } from "./MilestoneCard";

export const MilestoneTimeline: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleActive = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 pt-8 pb-20 md:pt-12 md:pb-28">
      {/* 
        Central Blue Vertical Timeline Line:
        Configured to start at top item (top-12) and end gracefully after 2008 Sydney node (bottom-28)
        so it NEVER touches or reaches the Ready to Get Started section!
      */}
      <div className="absolute top-12 bottom-28 left-6 md:left-1/2 w-[3.5px] bg-[#0084CA] -translate-x-1/2 z-0 rounded-full" />

      {/* Timeline Items */}
      <div className="space-y-12 md:space-y-16 relative z-10">
        {milestoneData.map((item) => {
          const isRight = item.side === "right";
          const isSelected = activeId === item.id;

          return (
            <div
              key={item.id}
              className="relative flex flex-col md:flex-row items-center"
            >
              {/* Timeline Year Circle Node with Hover & Click Animation */}
              <button
                type="button"
                onClick={() => toggleActive(item.id)}
                aria-label={`Milestone year ${item.year}`}
                className={`absolute left-6 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-13 h-13 md:w-15 md:h-15 rounded-full text-white flex items-center justify-center font-extrabold text-xs md:text-sm tracking-tight z-20 border-2 border-white cursor-pointer transition-all duration-300 ease-out select-none ${
                  isSelected
                    ? "bg-[#0070B8] scale-125 ring-8 ring-sky-300 shadow-[0_0_25px_rgba(0,132,202,0.6)]"
                    : "bg-[#0084CA] shadow-lg ring-4 ring-sky-100/90 hover:scale-125 hover:bg-[#0070B8] hover:ring-8 hover:ring-sky-200/80 hover:shadow-[0_0_20px_rgba(0,132,202,0.5)] active:scale-95"
                }`}
              >
                {item.year}
              </button>

              {/* Card Container aligned Left or Right */}
              <div
                className={`w-full pl-16 md:pl-0 md:w-1/2 flex ${
                  isRight
                    ? "md:ml-auto md:pl-12 justify-start"
                    : "md:mr-auto md:pr-12 justify-start md:justify-end"
                }`}
              >
                <MilestoneCard
                  milestone={item}
                  isSelected={isSelected}
                  onCardClick={() => toggleActive(item.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MilestoneTimeline;
