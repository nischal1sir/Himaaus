import React from "react";
import { Target, Compass, Globe, Award } from "lucide-react";
import goalsImg from "../../../assets/images/our-goals-vision.png";

export const OurGoalsSection: React.FC = () => {
  const goals = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver ethical, comprehensive, and world-class educational consulting services that pave the way for international academic success.",
    },
    {
      icon: Compass,
      title: "Our Vision",
      description: "To be the most preferred and trusted global education consultancy, renowned for empowering students to achieve their career aspirations.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expand our network across Australia and internationally to provide seamless support and on-ground assistance for every student.",
    },
    {
      icon: Award,
      title: "Student Welfare",
      description: "Foster a lifelong partnership with our students, ensuring their ongoing academic success, career growth, and personal well-being.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          {/* Accent bar and section tag */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-11 h-[3px] bg-[#0084CA] rounded-full inline-block"></span>
            <span className="text-[#FFB800] font-bold text-xs md:text-sm tracking-[0.15em] uppercase">
              OUR GOALS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#0084CA] font-extrabold text-3xl md:text-4xl lg:text-[40px] tracking-tight leading-tight mb-6">
            Empowering Dreams & Building Global Futures
          </h2>

          {/* Goals Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFB800]/15 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[#D97706]" />
                  </div>
                  <h3 className="text-[#0084CA] font-bold text-base mb-1.5">
                    {goal.title}
                  </h3>
                  <p className="text-[#334155] text-xs sm:text-sm leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Image Card */}
        <div className="relative group">
          <div className="rounded-[28px] md:rounded-[32px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300">
            <img
              src={goalsImg}
              alt="Our Goals and Future Vision"
              className="w-full h-[320px] sm:h-[380px] md:h-[460px] object-cover object-center transition-transform duration-500 group-hover:scale-102"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoalsSection;
