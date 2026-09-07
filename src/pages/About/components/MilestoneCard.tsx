import React from "react";
import type { Milestone } from "../data/milestoneData";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

interface MilestoneCardProps {
  milestone: Milestone;
  isSelected?: boolean;
  onCardClick?: () => void;
}

export const MilestoneCard: React.FC<MilestoneCardProps> = ({
  milestone,
  isSelected = false,
  onCardClick,
}) => {
  return (
    <div
      onClick={onCardClick}
      className={`bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border transition-all duration-300 ease-out w-full max-w-[400px] cursor-pointer select-none ${
        isSelected
          ? "border-[#0084CA] shadow-[0_20px_45px_rgba(0,132,202,0.2)] -translate-y-2 scale-[1.02] ring-2 ring-[#0084CA]/20"
          : "border-sky-100/90 hover:border-[#0084CA]/60 hover:shadow-[0_20px_40px_rgba(0,132,202,0.16)] hover:-translate-y-2 hover:scale-[1.02] active:translate-y-0 active:scale-[0.99] active:shadow-md"
      }`}
    >
      {/* Card Header: City Name & Year Badge */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-100">
        <h3 className="font-extrabold text-xl md:text-2xl text-[#0F172A] tracking-tight group-hover:text-[#0084CA] transition-colors duration-200">
          {milestone.city}
        </h3>

        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#EAF5FC] text-[#0084CA] font-semibold text-xs md:text-sm rounded-lg border border-sky-100 shadow-2xs">
          <Calendar className="w-3.5 h-3.5 text-[#0084CA]" />
          <span>{milestone.year}</span>
        </div>
      </div>

      {/* Card Content: Address, Phone, Email */}
      <div className="space-y-3.5 text-[#334155]">
        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="w-4.5 h-4.5 text-[#0084CA] flex-shrink-0 mt-0.5" />
          <p className="text-[14px] md:text-[15px] text-[#334155] leading-relaxed font-normal">
            {milestone.address}
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-[#0084CA] flex-shrink-0" />
          <p className="text-[14px] md:text-[15px] text-[#334155] font-medium tracking-wide">
            {milestone.phone}
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-[#0084CA] flex-shrink-0" />
          <p className="text-[14px] md:text-[15px] text-[#334155] font-medium">
            {milestone.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MilestoneCard;
