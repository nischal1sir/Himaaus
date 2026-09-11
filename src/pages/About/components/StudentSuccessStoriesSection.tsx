import React from "react";
import Company3 from "../../../assets/AboutUs/Company3.jpg";

export const StudentSuccessStoriesSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          {/* Accent bar and section tag */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-11 h-[3px] bg-[#0084CA] rounded-full inline-block"></span>
            <span className="text-[#FFB800] font-bold text-xs md:text-sm tracking-[0.15em] uppercase">
              STORIES
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#0084CA] font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-4">
            Student Success Stories
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#475569] text-sm md:text-[15px] leading-relaxed font-normal mb-7">
            Over the years, we've helped thousands of students achieve their dreams of studying in Australia. Our comprehensive support system ensures that every student receives the guidance they need to succeed academically and personally in their new environment.
          </p>


        </div>

        {/* Right Column: Image Card */}
        <div className="relative group order-1 lg:order-2">
          <div className="rounded-[28px] md:rounded-[32px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300">
            <img
              src={Company3}
              alt="Student Success Stories - High five in office"
              className="w-full h-[320px] sm:h-[380px] md:h-[440px] object-cover object-center transition-transform duration-500 group-hover:scale-102"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSuccessStoriesSection;
