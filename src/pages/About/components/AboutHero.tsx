import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface AboutHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backTo?: string;
  onBack?: () => void;
  showBack?: boolean;
}

export const AboutHero: React.FC<AboutHeroProps> = ({
  title,
  subtitle,
  backgroundImage = "https://himaaus.com/images/WEBSITE-4.png",
  backTo = "/about",
  onBack,
  showBack = true,
}) => {
  const navigate = useNavigate();

  const handleBackClick = (e: React.MouseEvent) => {
    if (onBack) {
      e.preventDefault();
      onBack();
      return;
    }

    // Check if there is history in the current session state
    if (window.history.state && window.history.state.idx > 0) {
      e.preventDefault();
      navigate(-1);
    }
  };

  return (
    <section
      className="relative min-h-[360px] sm:min-h-[400px] md:min-h-[440px] w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url("${backgroundImage}")
        `,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[360px] sm:min-h-[400px] md:min-h-[440px] max-w-6xl flex-col justify-end px-4 sm:px-6 lg:px-8 pb-12 pt-28 sm:pt-32 text-white">
        {/* Back Navigation Link / Button */}
        {showBack && (
          <Link
            to={backTo}
            onClick={handleBackClick}
            className="mb-3 inline-flex w-fit items-center gap-1.5 text-sm sm:text-base text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            ← Back
          </Link>
        )}

        {/* Hero Banner Main Title */}
        <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-tight text-white tracking-tight">
          {title}
        </h1>

        {/* Hero Banner Subtitle */}
        <p className="mt-3 max-w-3xl text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-normal">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default AboutHero;