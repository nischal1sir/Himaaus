import React from "react";
import { Link } from "react-router-dom";
import whoWeAreImg from "../../../assets/images/who-we-are-graduate.png";

export const AboutUsOverviewSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column: Image Card */}
        <div className="relative group">
          <div className="rounded-[28px] md:rounded-[32px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300">
            <img
              src={whoWeAreImg}
              alt="Graduate student - Who We Are"
              className="w-full h-[340px] sm:h-[400px] md:h-[460px] object-cover object-center transition-transform duration-500 group-hover:scale-102"
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center">
          {/* Accent bar and section tag */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-11 h-[3px] bg-[#0084CA] rounded-full inline-block"></span>
            <span className="text-[#FFB800] font-bold text-xs md:text-sm tracking-[0.15em] uppercase">
              ABOUT US
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#0084CA] font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-4">
            Who We Are?
          </h2>

          {/* Body Paragraph */}
          <p className="text-[#475569] text-sm md:text-[15px] leading-relaxed font-normal mb-7">
            Founded in 2008 in Sydney, Australia, Hima Aus is a leading Education and Migration Consultancy with a strong presence across multiple Cities in Australia, Nepal, and Sri Lanka. Over the years, we’ve proudly guided Thousands of Students and Clients all around the Globe in achieving their Academic and Career Aspirations. At Hima Aus, we’re committed to provide Personalised Support, Practical Solutions, and Expert Guidance to make your Education and Migration Journey Smooth, Successful, and Stress-Free.
          </p>

          {/* Action Button */}
          <div>
            <Link
              to="/about/who-we-are"
              className="bg-[#0084CA] hover:bg-[#0073B2] text-white font-semibold text-sm sm:text-base px-7 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-102 cursor-pointer inline-flex items-center justify-center"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsOverviewSection;
