import React from "react";
import { statsData } from "../data/aboutPageData";
import siddharthaImg from "../../../assets/images/siddhartha-poudel-director.png";

export const LeadershipTeamSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
      {/* Header */}
      <div className="mb-10 md:mb-12">
        {/* Accent bar and section tag */}
        <div className="flex items-center gap-2.5 mb-2.5">
          <span className="w-11 h-[3px] bg-[#0084CA] rounded-full inline-block"></span>
          <span className="text-[#FFB800] font-bold text-xs md:text-sm tracking-[0.15em] uppercase">
            EXPERT PROFESSIONALS
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-[#0084CA] font-extrabold text-3xl md:text-4xl lg:text-[40px] tracking-tight leading-tight mb-3">
          Meet Our Leadership & Team
        </h2>

        {/* Subtitle Description */}
        <p className="text-[#334155] text-sm md:text-[15px] max-w-5xl leading-relaxed font-normal">
          Our team combines years of industry experience with a passion for student success. Each member brings unique expertise to guide you through every step of your journey.
        </p>
      </div>

      {/* Leadership Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
        {/* Leadership Member Card - Siddhartha Poudel */}
        <div className="bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          {/* Card Top Image */}
          <div className="w-full h-[320px] sm:h-[340px] overflow-hidden bg-gray-50">
            <img
              src={siddharthaImg}
              alt="SIDDHARTHA POUDEL - Director"
              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-103"
            />
          </div>

          {/* Card Details */}
          <div className="p-6 md:p-7">
            <h3 className="text-[#0084CA] font-extrabold text-xl md:text-2xl tracking-wide uppercase mb-1">
              SIDDHARTHA POUDEL
            </h3>
            <h4 className="text-[#FFB800] font-bold text-base md:text-lg mb-3">
              Director
            </h4>
            <p className="text-[#334155] text-sm leading-relaxed font-normal">
              Providing strategic direction and governance to support HIMA AUS Consultancy's mission of trusted education consulting.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Counter Cards Grid (As shown in Image 2) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-2xl md:rounded-[20px] p-6 md:p-8 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <span className="text-[#0084CA] font-extrabold text-3xl md:text-4xl lg:text-[42px] tracking-tight leading-none mb-2">
              {stat.value}
            </span>
            <span className="text-[#334155] font-semibold text-xs sm:text-sm md:text-base">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeamSection;
