import React, { useState, useEffect } from "react";
import {
  Target,
  Users,
  Award,
  Heart,
  CheckCircle2,
  Quote,
} from "lucide-react";
import siddharthaImg from "../../assets/AboutUs/Director.jpg";
import CTASection from "../Home/whySection/whyChooseExplore/CTASection";
import AboutHero from "./components/AboutHero";
import { apiClient } from "../../services/apiClient";

export const DirectorMessagePage: React.FC = () => {
  const [directorMessage, setDirectorMessage] = useState<string | null>(null);
  const [directorName, setDirectorName] = useState<string>("Siddhartha Poudel");
  const [directorTitle, setDirectorTitle] = useState<string>("Director- Hima Aus Education Consultancy");

  useEffect(() => {
    async function loadDirectorMessage() {
      try {
        const data = await apiClient.get<any>('/director-message');
        if (data) {
          const item = Array.isArray(data) ? data[0] : data;
          if (item) {
            if (item.name) setDirectorName(item.name);
            if (item.designation) setDirectorTitle(item.designation);
            if (item.message) setDirectorMessage(item.message);
          }
        }
      } catch (err) {
        console.error('Failed to fetch director message:', err);
      }
    }
    loadDirectorMessage();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* 1. Hero Banner Section */}
      <AboutHero
        title="A Message From Our Director"
        subtitle="Words of wisdom, vision, and inspiration from our leadership guiding your educational journey"
        backTo="/about"
      />

      {/* 2. Main Page Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16">
        {/* Top Header Block */}
        <div className="mb-10 md:mb-12">
          {/* Accent Line & Tag */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-11 h-[3px] bg-[#0084CA] rounded-full inline-block" />
            <span className="text-[#FFB800] font-bold text-xs sm:text-sm tracking-[0.15em] uppercase">
              INSPIRING YOU THROUGH WORDS
            </span>
          </div>

          {/* Section Main Title */}
          <h2 className="text-[#0084CA] font-extrabold text-3xl sm:text-4xl md:text-[42px] tracking-tight leading-tight mb-4">
            Words of Inspiration That Guide You
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#475569] text-base sm:text-[17px] leading-relaxed max-w-5xl font-normal">
            Our vision is rooted in empowering students to pursue global
            education with clarity, confidence, and purpose. Every journey we
            guide is built on trust, integrity, and a deep commitment to
            student success.
          </p>
        </div>

        {/* Two-Column Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Director Photo Card */}
            <div className="relative rounded-[28px] md:rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] group">
              <img
                src={siddharthaImg}
                alt="Siddhartha Poudel - Director"
                className="w-full h-[380px] sm:h-[430px] md:h-[460px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
              />

              {/* Glassmorphism Name Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/25 backdrop-blur-md border border-white/40 rounded-2xl p-4 sm:p-5 text-white shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-white leading-tight">
                  {directorName}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-white/90 mt-0.5">
                  {directorTitle}
                </p>
              </div>
            </div>

            {/* Stats Counter Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <span className="text-[#0084CA] font-extrabold text-2xl sm:text-3xl tracking-tight mb-1">
                  15+
                </span>
                <span className="text-[#475569] font-medium text-xs sm:text-sm">
                  Years of Experience
                </span>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <span className="text-[#0084CA] font-extrabold text-2xl sm:text-3xl tracking-tight mb-1">
                  10,000+
                </span>
                <span className="text-[#475569] font-medium text-xs sm:text-sm">
                  Students Guided
                </span>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <span className="text-[#0084CA] font-extrabold text-2xl sm:text-3xl tracking-tight mb-1">
                  98%
                </span>
                <span className="text-[#475569] font-medium text-xs sm:text-sm">
                  Success Rate
                </span>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <span className="text-[#0084CA] font-extrabold text-2xl sm:text-3xl tracking-tight mb-1">
                  50+
                </span>
                <span className="text-[#475569] font-medium text-xs sm:text-sm">
                  University Partners
                </span>
              </div>
            </div>

            {/* Our Core Values */}
            <div className="pt-2">
              <h3 className="text-[#0084CA] font-bold text-2xl sm:text-3xl tracking-tight mb-5">
                Our Core Values
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {/* Value 1 */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-start gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0084CA] flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-[#0084CA]" />
                  </div>

                  <div>
                    <h4 className="text-[#0084CA] font-bold text-sm sm:text-base leading-snug">
                      Authentic Counseling
                    </h4>

                    <p className="text-[#475569] text-xs mt-1 leading-relaxed">
                      Genuine guidance for every student
                    </p>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-start gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0084CA] flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#0084CA]" />
                  </div>

                  <div>
                    <h4 className="text-[#0084CA] font-bold text-sm sm:text-base leading-snug">
                      Student-Centric
                    </h4>

                    <p className="text-[#475569] text-xs mt-1 leading-relaxed">
                      Your success is our priority
                    </p>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-start gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0084CA] flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-[#0084CA]" />
                  </div>

                  <div>
                    <h4 className="text-[#0084CA] font-bold text-sm sm:text-base leading-snug">
                      Excellence
                    </h4>

                    <p className="text-[#475569] text-xs mt-1 leading-relaxed">
                      Quality service at every step
                    </p>
                  </div>
                </div>

                {/* Value 4 */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-start gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0084CA] flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-[#0084CA]" />
                  </div>

                  <div>
                    <h4 className="text-[#0084CA] font-bold text-sm sm:text-base leading-snug">
                      Passion
                    </h4>

                    <p className="text-[#475569] text-xs mt-1 leading-relaxed">
                      Driven by your dreams
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Tag Badge */}
            <div className="flex items-center gap-2 mb-3">
              <Quote className="w-5 h-5 text-[#FFB800] rotate-180" />

              <span className="text-[#FFB800] font-bold text-xs sm:text-sm tracking-[0.12em] uppercase">
                Director's Message
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[#0084CA] font-extrabold text-3xl sm:text-4xl lg:text-[40px] tracking-tight leading-tight mb-4">
              Guiding Your Journey with Vision &amp; Passion
            </h3>

            {/* Intro Lead */}
            <p className="text-[#475569] text-base sm:text-[17px] leading-relaxed mb-6 font-normal">
              A heartfelt message from our director, sharing insights, values,
              and the vision that drives us to help students achieve their
              international education dreams.
            </p>

            {/* Bullet Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#0084CA]" />
                </div>

                <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
                  Namaste and a very warm welcome to all aspiring students,
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#0084CA]" />
                </div>

                <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
                  Founded in 2008 by former international students like you,
                  we've been in your shoes, knowing every question and doubt
                  that guides you at every step.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#0084CA]" />
                </div>

                <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
                  What sets us apart? It's not just our multiple global offices
                  or thousands of success stories, but our genuine care.
                </p>
              </div>
            </div>

            {/* Highlighted Quote */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-6 sm:p-7 mb-8 text-center shadow-xs">
              <p className="text-slate-800 italic text-lg sm:text-xl font-medium leading-relaxed font-serif">
                "Authentic and Genuine Counseling is the core value of our
                service."
              </p>
            </div>

            {/* Paragraph Body Text */}
            <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed font-normal mb-8">
              <p>
                Our counselors—many of whom were once students themselves—give
                honest, tailored advice to match your goals.
              </p>

              <p>
                From course selection to visa success, we're with you—because
                our motto{" "}
                <span className="font-semibold text-[#0084CA]">
                  #WithYouEveryStep
                </span>{" "}
                isn't just a tagline; it's our promise.
              </p>

              <p>
                Imagine studying in Australia—world-class education, vibrant
                cities, and a future full of opportunities.
              </p>

              <p>
                Whether it's a VET course, bachelor's, or master's, we partner
                with top institutions to turn your dreams into reality.
              </p>

              <p>So, if you're ready to take the leap, choose HIMA AUS.</p>

              <p>
                Visit us at our nearest office or contact us via our digital
                platforms.
              </p>

              <p className="font-medium text-slate-800 pt-1">
                We can't wait to be a part of your journey.
              </p>
            </div>

            {/* Director's Personal Commitment Card */}
            <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-start gap-4 transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#FFF8E6] text-[#FFB800] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Heart className="w-5 h-5 text-[#FFB800] fill-[#FFB800]/20" />
              </div>

              <div>
                <h4 className="text-[#0084CA] font-bold text-base sm:text-lg mb-1">
                  Director's Personal Commitment
                </h4>

                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
                  I personally oversee and ensure every student receives the
                  attention and guidance they deserve for a successful
                  international education journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ready to Get Started CTA Section */}
      <CTASection />
    </div>
  );
};

export default DirectorMessagePage;