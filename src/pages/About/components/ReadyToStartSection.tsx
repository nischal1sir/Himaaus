import React from "react";

export const ReadyToStartSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#F0F9FF] to-[#E6F4FE] py-16 md:py-20 px-4 text-center border-t border-sky-100/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-[#0084CA] font-extrabold text-3xl md:text-4xl tracking-tight mb-3">
          Ready to Get Started?
        </h2>

        {/* Section Subtitle */}
        <p className="text-[#0084CA]/80 text-sm md:text-base max-w-xl mx-auto mb-9 font-medium leading-relaxed">
          Contact us today for a free consultation and take the first step towards your educational goals.
        </p>

        {/* 4 CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
          {/* Button 1: Green Call Now with Phone Number */}
          <a
            href="tel:+9779805027022"
            className="bg-[#00C853] hover:bg-[#00B048] text-white font-bold py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm md:text-base inline-flex items-center justify-center"
          >
            Call Now: +977 980-5027022
          </a>

          {/* Button 2: Orange Call Now */}
          <a
            href="tel:+9779805027022"
            className="bg-[#FFB800] hover:bg-[#E5A600] text-white font-bold py-3.5 px-7 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm md:text-base inline-flex items-center justify-center"
          >
            Call Now:
          </a>

          {/* Button 3: White Email Us */}
          <a
            href="mailto:info@himaaus.com"
            className="bg-white hover:bg-gray-50 text-[#0084CA] border border-gray-100 font-bold py-3.5 px-7 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm md:text-base inline-flex items-center justify-center"
          >
            Email Us:
          </a>

          {/* Button 4: Blue Book Consultation */}
          <a
            href="#book-consultation"
            className="bg-[#0084CA] hover:bg-[#0073B2] text-white font-bold py-3.5 px-7 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm md:text-base inline-flex items-center justify-center"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStartSection;
