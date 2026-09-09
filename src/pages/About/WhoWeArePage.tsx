import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Award,
  Globe,
  Building2,
  Users,
  GraduationCap,
  MapPin,
} from "lucide-react";
import heroBg from "../../assets/images/hero-about-bg.png";
import whoWeAreImg from "../../assets/images/who-we-are-graduate.png";
import CTASection from "../Home/whySection/whyChooseExplore/CTASection";

export const WhoWeArePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* 1. Hero Banner Section (Matches Screenshot 1) */}
      <section
        className="relative min-h-[360px] sm:min-h-[400px] md:min-h-[440px] w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/70" />

        {/* Hero Content Container */}
        <div className="relative z-10 mx-auto flex min-h-[360px] sm:min-h-[400px] md:min-h-[440px] max-w-6xl flex-col justify-end px-4 sm:px-6 lg:px-8 pb-12 pt-28 sm:pt-32 text-white">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-3 inline-flex w-fit items-center gap-1.5 text-sm sm:text-base text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            ← Back
          </button>

          {/* Hero Main Title */}
          <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-tight text-white tracking-tight">
            Who We Are?
          </h1>

          {/* Hero Subtitle */}
          <p className="mt-3 max-w-3xl text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-normal">
            Hima Aus Education Consultancy is education and visa consultancy firm dedicated to guiding international students and aspiring migrants towards their global academic and career aspirations.
          </p>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16">
        
        {/* Top Header Block: Who We Are? (Matches Screenshots 1 & 2) */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight leading-tight mb-6">
            <span className="text-[#0084CA]">Who</span>{" "}
            <span className="text-[#FFB800]">We Are?</span>
          </h2>

          <p className="text-[#475569] text-base sm:text-[17px] leading-relaxed font-normal mb-6">
            <span className="font-bold text-[#FFB800]">
              Hima Aus Education Australia Pty Ltd
            </span>{" "}
            is an established education and visa consultancy firm providing a wide range of services to international students and aspiring migrants since 2008. Our unrivalled service, support and guidance to students begins in their home country and continues throughout their stay and educational journey in Australia.
          </p>

          <p className="text-[#475569] text-base sm:text-[17px] leading-relaxed font-normal mb-8">
            We have grown and evolved over the years and now operate from 14 branch offices across 6 countries. Our services include course and institution selection, visa assistance, pre-departure briefing, ongoing student support and pathways to work and migration.
          </p>

          {/* Action Buttons: Our Services & Contact Us (Matches Screenshots 2 & 3) */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/services"
              className="bg-[#FFB800] hover:bg-[#E5A600] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-102 inline-flex items-center justify-center cursor-pointer"
            >
              Our Services
            </Link>

            <Link
              to="/find-us"
              className="bg-[#0084CA] hover:bg-[#0073B2] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-102 inline-flex items-center justify-center cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Section 2: Two Column Layout with Graduate Photo & 6 Stats Cards (Matches Screenshots 3 & 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start my-12 md:my-16">
          
          {/* LEFT COLUMN: Graduate Image Card */}
          <div className="lg:col-span-5">
            <div className="rounded-[28px] md:rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.07)] relative group">
              <img
                src={whoWeAreImg}
                alt="Graduate student with diploma - Who We Are"
                className="w-full h-[400px] sm:h-[480px] md:h-[540px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Detailed Paragraphs & 6 Stats Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-5 text-[#475569] text-base sm:text-[16.5px] leading-relaxed font-normal mb-8">
              <p>
                Hima Aus Education Australia Pty Ltd is powered by a highly dedicated team of education and migration professionals with extensive experience in student counselling, training, and global educational pathways. We believe strongly in quality service, transparency, and professional delivery — values that define every interaction we have with our students.
              </p>

              <p>
                All of our Educational Counselors and Migration Advisors hold relevant certifications and professional qualifications. We ensure continuous training to keep our team aligned with the latest educational opportunities, migration legislation, and student support standards. At Hima Aus, we work closely with students to help them unlock their full potential and connect them with the right academic opportunities across Australia and the world. By maintaining strong relationships with reputable universities, colleges, and training providers, we strive to serve as a reliable bridge between international students and globally recognized institutions.
              </p>
            </div>

            {/* 6 Stats Cards Grid (3x2 Grid - Matches Screenshot 4) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Stat 1: 15 Years of Experience */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-sky-200/90 text-center flex flex-col items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-full bg-[#FFF8E6] text-[#FFB800] flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-[#FFB800]" />
                </div>
                <span className="text-slate-800 font-extrabold text-xl sm:text-2xl tracking-tight mb-1">
                  15
                </span>
                <span className="text-[#475569] font-medium text-xs sm:text-sm leading-snug">
                  Years of Experience
                </span>
              </div>

              {/* Stat 2: 7 Operations in Countries */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-sky-200/90 text-center flex flex-col items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-full bg-[#E0F2FE] text-[#0084CA] flex items-center justify-center mb-3">
                  <Globe className="w-6 h-6 text-[#0084CA]" />
                </div>
                <span className="text-slate-800 font-extrabold text-xl sm:text-2xl tracking-tight mb-1">
                  7
                </span>
                <span className="text-[#475569] font-medium text-xs sm:text-sm leading-snug">
                  Operations in Countries
                </span>
              </div>

              {/* Stat 3: 10 Offices */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-sky-200/90 text-center flex flex-col items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-full bg-[#FFF8E6] text-[#FFB800] flex items-center justify-center mb-3">
                  <Building2 className="w-6 h-6 text-[#FFB800]" />
                </div>
                <span className="text-slate-800 font-extrabold text-xl sm:text-2xl tracking-tight mb-1">
                  10
                </span>
                <span className="text-[#475569] font-medium text-xs sm:text-sm leading-snug">
                  Offices
                </span>
              </div>

              {/* Stat 4: 100 Team Members */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-sky-200/90 text-center flex flex-col items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-full bg-[#FFF8E6] text-[#FFB800] flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-[#FFB800]" />
                </div>
                <span className="text-slate-800 font-extrabold text-xl sm:text-2xl tracking-tight mb-1">
                  100
                </span>
                <span className="text-[#475569] font-medium text-xs sm:text-sm leading-snug">
                  Team Members
                </span>
              </div>

              {/* Stat 5: 100 Represents Institutions */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-sky-200/90 text-center flex flex-col items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-full bg-[#FFF8E6] text-[#FFB800] flex items-center justify-center mb-3">
                  <GraduationCap className="w-6 h-6 text-[#FFB800]" />
                </div>
                <span className="text-slate-800 font-extrabold text-xl sm:text-2xl tracking-tight mb-1">
                  100
                </span>
                <span className="text-[#475569] font-medium text-xs sm:text-sm leading-snug">
                  Represents Institutions
                </span>
              </div>

              {/* Stat 6: 15,000 Students Served */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-sky-200/90 text-center flex flex-col items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-full bg-[#FFF8E6] text-[#FFB800] flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-[#FFB800]" />
                </div>
                <span className="text-slate-800 font-extrabold text-xl sm:text-2xl tracking-tight mb-1">
                  15,000
                </span>
                <span className="text-[#475569] font-medium text-xs sm:text-sm leading-snug">
                  Students Served
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Section 3: Objective, Mission, Vision, Goal Cards (2x2 Grid - Matches Screenshot 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-14">
          
          {/* Card 1: Objective */}
          <div className="rounded-2xl border-2 border-[#0084CA] p-6 sm:p-8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md">
            <h3 className="text-[#0084CA] font-extrabold text-2xl sm:text-3xl mb-3 tracking-tight">
              Objective
            </h3>
            <p className="text-[#475569] text-sm sm:text-[15px] leading-relaxed font-normal">
              We shall GROW everyday by challenging ourselves not others; ACCELERATE by competing with our own past performance not of others; and EXCEL by outperforming our own expectations and not of others.
            </p>
          </div>

          {/* Card 2: Mission */}
          <div className="rounded-2xl border-2 border-[#0084CA] p-6 sm:p-8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md">
            <h3 className="text-[#0084CA] font-extrabold text-2xl sm:text-3xl mb-3 tracking-tight">
              Mission
            </h3>
            <p className="text-[#475569] text-sm sm:text-[15px] leading-relaxed font-normal">
              To empower study-abroad aspirants by providing authentic &amp; genuine counseling, effective test preparation classes and reliable support services.
            </p>
          </div>

          {/* Card 3: Vision */}
          <div className="rounded-2xl border-2 border-[#0084CA] p-6 sm:p-8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md">
            <h3 className="text-[#0084CA] font-extrabold text-2xl sm:text-3xl mb-3 tracking-tight">
              Vision
            </h3>
            <p className="text-[#475569] text-sm sm:text-[15px] leading-relaxed font-normal">
              To become a synonym for study-abroad.
            </p>
          </div>

          {/* Card 4: Goal */}
          <div className="rounded-2xl border-2 border-[#0084CA] p-6 sm:p-8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md">
            <h3 className="text-[#0084CA] font-extrabold text-2xl sm:text-3xl mb-3 tracking-tight">
              Goal
            </h3>
            <p className="text-[#475569] text-sm sm:text-[15px] leading-relaxed font-normal">
              Grow, Accelerate, Excel.
            </p>
          </div>

        </div>

      </section>

      {/* 3. Ready to Get Started CTA Section */}
      <CTASection />
    </div>
  );
};

export default WhoWeArePage;
