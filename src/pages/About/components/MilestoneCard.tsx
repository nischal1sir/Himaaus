import React from "react";
import type { Milestone } from "../data/milestoneData";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

interface MilestoneCardProps {
  milestone: Milestone;
}

export const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone }) => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-sky-100/80 hover:shadow-[0_12px_40px_rgba(0,132,202,0.12)] transition-all duration-300 w-full max-w-md">
      {/* Card Header: City Name & Year Badge */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100/60">
        <h3 className="font-extrabold text-xl md:text-2xl text-[#0F172A] tracking-tight">
          {milestone.city}
        </h3>

        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#EAF5FC] text-[#0084CA] font-semibold text-xs md:text-sm rounded-lg border border-sky-100">
          <Calendar className="w-3.5 h-3.5 text-[#0084CA]" />
          <span>{milestone.year}</span>
        </div>
      </div>

      {/* Card Content: Address, Phone, Email */}
      <div className="space-y-3.5 mt-4 text-[#334155]">
        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-[#0084CA] flex-shrink-0 mt-1" />
          <p className="text-sm text-gray-700 leading-relaxed font-normal">
            {milestone.address}
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-[#0084CA] flex-shrink-0" />
          <p className="text-sm text-gray-700 font-medium tracking-wide">
            {milestone.phone}
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-[#0084CA] flex-shrink-0" />
          <p className="text-sm text-gray-700 font-medium">
            {milestone.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MilestoneCard;
