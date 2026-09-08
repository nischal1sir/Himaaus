import React from "react";
import { ShieldCheck, Eye, Star } from "lucide-react";

export const GuidingPrinciplesSection: React.FC = () => {
  const cards = [
    {
      id: "trust",
      icon: ShieldCheck,
      title: "Unshakable Trust",
      description:
        "We build long-term confidence through complete honesty, reliability, and integrity in every step of your journey.",
    },
    {
      id: "transparency",
      icon: Eye,
      title: "Total Transparency",
      description:
        "Everything is clear from day one — full visibility on process, costs, timelines, and realistic outcomes.",
    },
    {
      id: "service",
      icon: Star,
      title: "Exceptional Service",
      description:
        "Personalized attention, fast response times, and genuine dedication to your success and complete satisfaction.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 pt-12 md:pt-16 pb-8 md:pb-12">
      {/* Category Tag & Header */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2.5 mb-2.5">
          <span className="w-11 h-[3px] bg-[#0084CA] rounded-full inline-block"></span>
          <span className="text-[#FFB800] font-bold text-xs md:text-sm tracking-[0.15em] uppercase">
            OUR GUIDING PRINCIPLES
          </span>
        </div>

        <h2 className="text-[#0084CA] font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-3">
          The Values That Drive Us Forward
        </h2>

        <p className="text-[#475569] text-sm md:text-base max-w-4xl leading-relaxed font-normal">
          We believe in building lasting relationships through trust, transparency, and exceptional service.
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="bg-white rounded-3xl p-6 sm:p-7 md:p-8 border border-gray-100/90 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex flex-col justify-start transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Light Blue Rounded Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-[#0084CA] stroke-[2]" />
              </div>

              {/* Card Title */}
              <h3 className="text-[#0084CA] font-bold text-xl md:text-2xl mb-3 tracking-tight">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#475569] text-sm sm:text-[14.5px] leading-relaxed font-normal">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GuidingPrinciplesSection;
