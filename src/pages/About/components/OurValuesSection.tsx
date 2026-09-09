import React from "react";
import ourValuesImg from "../../../assets/images/our-values-student.png";

export const OurValuesSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column: Image Card */}
        <div className="relative group">
          <div className="rounded-[28px] md:rounded-[32px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300">
            <img
              src={ourValuesImg}
              alt="Graduate student celebrating - Our Values"
              className="w-full h-[320px] sm:h-[380px] md:h-[440px] object-cover object-center transition-transform duration-500 group-hover:scale-102"
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center">
          {/* Accent bar and section tag */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-11 h-[3px] bg-[#0084CA] rounded-full inline-block"></span>
            <span className="text-[#FFB800] font-bold text-xs md:text-sm tracking-[0.15em] uppercase">
              PRINCIPLE
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#0084CA] font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-4">
            Our Values
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#475569] text-sm md:text-[15px] leading-relaxed font-normal mb-7">
            Providing genuine and accurate advice, and guidance to our students lies in the heart of what we do. We share our own stories to inspire our students and strive to be an integral part of their journey to achieve their education and career goals. We are proud of our ethical standards and the reputation we have gained since our inception.
          </p>


        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
