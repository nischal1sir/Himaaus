import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../../../assets/images/hero-about-bg.png";

export const AboutHero: React.FC = () => {
  return (
    <section
      className="relative min-h-[380px] sm:min-h-[420px] md:min-h-[460px] w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay matching other hero banners */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[380px] sm:min-h-[420px] md:min-h-[460px] max-w-6xl flex-col justify-end px-4 sm:px-6 lg:px-8 pb-12 pt-28 sm:pt-32 md:pb-16 text-white">
        {/* Back Button -> Navigates to Home Page ("/") */}
        <Link
          to="/"
          className="mb-4 inline-flex w-fit items-center gap-1.5 text-base text-white/90 hover:text-white transition-colors cursor-pointer"
        >
          ← Back 
        </Link>

        {/* Hero Title */}
        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl tracking-tight">
          Learn more About Us
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-3 max-w-3xl text-base text-white/85 md:text-lg leading-relaxed font-normal">
          Our experienced team guides students in education consultancy, visa processing, and career planning to achieve their international study goals.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
